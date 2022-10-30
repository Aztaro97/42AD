import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define a type for the slice state
interface userState {
  userInfo: object;
}

// Define the initial state using that type
const initialState: userState = {
  userInfo: {},
  access_token: "",
};

const getUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId: number, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };
      const res = await axios.get(
        "https://api.intra.42.fr/v2/users/aztaro97",
        config
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userFSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserById.pending]: (state, action) => {
      console.log(action.payload);
    },
    [getUserById.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [getUserById.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount } = userFSlice.actions;

export default userFSlice.reducer;
