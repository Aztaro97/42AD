import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Pressable,
  Stack,
  Text,
  useColorModeValue,
  KeyboardAvoidingView,
  View,
  Image,
  Center,
} from "native-base";
import { MotiView, motify, MotiText } from "moti";
import {
  Platform,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { useContext } from "react";
import { AuthenticatedUserContext } from "../../contexts/AuthenticatedUserProvider";
import { useNavigation } from "@react-navigation/native";
import { LoginSchema } from "../../utils/validationSchema";
import { Color } from "../../constants/Colors";
import { CLIENT_ID_42, CLIENT_SECRET_42, AUTHENTIFICATE_URL_42 } from "@env";
import {
  ResponseType,
  useAuthRequest,
  makeRedirectUri,
} from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

const { height, width } = Dimensions.get("window");

const useProxy = Platform.select({ web: false, default: true });
const authorizationEndPoint =
  "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-479e54e14f53089fe9586706de2ffda63fe350c261320d17a5070d1e3045a6a4&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40taro97%2F42AbuDhabi%2F&response_type=code";

const LoginScreen = () => {
  WebBrowser.maybeCompleteAuthSession();
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID_42,
      clientSecret: CLIENT_SECRET_42,
      redirectUri: makeRedirectUri({ useProxy: true }),
      responseType: ResponseType.Token,
    },
    { authorizationEndpoint: authorizationEndPoint, useProxy: true }
  );

  const navigation = useNavigation();

  //   response && console.log(response)
  //   request && console.log(request)

  const { setUser } = useContext(AuthenticatedUserContext);

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      console.log(access_token);
      setUser(response.params);
    }
  }, [response]);

  return (
    <Box flex={1} background={Color.primary} h="full">
      <ImageBackground
        source={require("../../assets/images/bgImage.png")}
        style={styles.bgImage}
      >
        <Center>
          <Image
            source={require("../../assets/images/logo.png")}
            alt="bgImage"
            resizeMode="contain"
            w={200}
          />
        </Center>
      </ImageBackground>
      <Center flex={1} justifyContent="flex-end" mb={10} px={5}>
        <Button
          style={styles.login__button}
          px={20}
          mb={2}
          size={"lg"}
          color={Color.thirdly}
          _text={{
            fontWeight: "bold",
            color: Color.thirdly,
          }}
          onPress={() => promptAsync({ useProxy })}
        >
          Log in
        </Button>
        <Text color="#ffffff83">
          By continuing you agree that you have read and accept out T&Cs and
          Privacy Policy.
        </Text>
      </Center>
    </Box>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: height / 1.3,
  },

  login__button: {
    backgroundColor: Color.secondary,
    borderRadius: 10,
    padding: 10,
    elevation: 4,
    shadowColor: Color.thirdly,
    shadowOffset: { width: 100, height: 90 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});

export default LoginScreen;
