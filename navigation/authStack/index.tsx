import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../types/navigationTypes";
import LoginScreen from "../../screens/login/loginScreen";
import ResetPasswordScreen from "../../screens/forgetPassword/forgetPasswordScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AuthStackScreen = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </RootStack.Navigator>
  );
};

export default AuthStackScreen;
