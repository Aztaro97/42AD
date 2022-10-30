import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CLIENT_ID_42, CLIENT_SECRET_42, AUTHENTIFICATE_URL_42 } from "@env";

const initialState = {
  isLoading: false,
  userInfo: null,
  token: "",
  refresh_token: "",
  isAuthenticated: false,
  error: null,
};

export const generate42Token = createAsyncThunk(
  "auth/generate42Token",
  async (code: string, thunkApi) => {
    try {
      const result = await axios.post("https://api.intra.42.fr/oauth/token", {
        grant_type: "authorization_code",
        client_id: CLIENT_ID_42,
        client_secret: CLIENT_SECRET_42,
        code: code,
        redirect_uri: "https://auth.expo.io/@taro97/42AbuDhabi/",
        scope: "public projects",
      });
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "auth/getUserInfo",
  async (body, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      };
      const result = await axios.get("https://api.intra.42.fr/v2/me", config);
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlide = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    resetError: (state) => {
      return {
        ...state,
        error: null,
      };
    },
    logout: (state, action) => {
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        userInfo: null,
      };
    },
  },
  extraReducers: {
    // Login
    [generate42Token.pending]: (state, action) => {
      return;
    },
    [generate42Token.fulfilled]: (state, action) => {
      state.token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
    [generate42Token.rejected]: (state, action) => {
      state.error = action.error;
    },

    // Get User Info
    [getUserInfo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUserInfo.fulfilled]: (state, action) => {
      const {
        id,
        displayname,
        email,
        image_url,
        cursus_users,
        kind,
        correction_point,
      } = action?.payload;
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        userInfo: {
          id,
          displayname,
          email,
          image_url,
          cursus: cursus_users,
          status: kind,
          correction_point,
        },
      };
    },
    [getUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export const { logout } = authSlide.actions;

export default authSlide.reducer;
