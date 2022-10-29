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

// import UseAuthenticate from "../hook/useAuthenticate";

const AuthRoutes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //   const { api } = useAuthenticate();

  const { user } = useContext(AuthenticatedUserContext);

  if (isLoading)
    return (
      <Box safeArea>
        <LoaderSpinner />
      </Box>
    );

  return <>{!user ? <RootStackScreen /> : <AuthStackScreen />}</>;
};

export default AuthRoutes;
