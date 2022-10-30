import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";
import AuthStackScreen from "../navigation/authStack";
import { useContext } from "react";
import { AuthenticatedUserContext } from "../contexts/AuthenticatedUserProvider";
import RootStackScreen from "../navigation/rootStack";
import LoaderSpinner from "../components/loaderSpinner";
import { Box } from "native-base";
import { CLIENT_ID_42, CLIENT_SECRET_42 } from "@env";
import Fast42 from "@codam/fast42";
import { useTypeSelector } from "../hook/useTypeSelector";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../store/features/authSlides";

// import UseAuthenticate from "../hook/useAuthenticate";

const AuthRoutes = () => {
  //   const { api } = useAuthenticate();
  const dispatch = useDispatch();

  const { token, userInfo, isLoading } = useTypeSelector((state) => state.auth);

  const { user } = useContext(AuthenticatedUserContext);

  useEffect(() => {
    console.log("userInfo", userInfo);
    token && dispatch(getUserInfo());
  }, [token]);

  if (isLoading)
    return (
      <Box safeArea>
        <LoaderSpinner />
      </Box>
    );

  return <>{userInfo ? <RootStackScreen /> : <AuthStackScreen />}</>;
};

export default AuthRoutes;
