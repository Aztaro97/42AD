import { NavigationContainer } from "@react-navigation/native";
import { Heading, NativeBaseProvider, View } from "native-base";
import { StreamChat } from "stream-chat";
import { Provider } from "react-redux";
import { OverlayProvider, Chat, ChatContextValue } from "stream-chat-expo";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AnimatePresence } from "moti";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { STREAM_API_KEY } from "@env";
import {
  useFonts,
  Raleway_200ExtraLight,
  Raleway_400Regular,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import theme from "../../theme";
import { AuthenticatedUserProvider } from "../../contexts/AuthenticatedUserProvider";
import { store } from "../../store";

interface Props {
  children: React.ReactNode;
}

SplashScreen.preventAutoHideAsync();

const client = StreamChat.getInstance(
  STREAM_API_KEY
) as unknown as ChatContextValue["client"];

const AppContainer = ({ children }: Props) => {
  const [isReady, setIsReady] = useState(false);

  let [fontsLoaded] = useFonts({
    Raleway_200ExtraLight,
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const connectUsers = async () => {
    // Connect a user
    await client.connectUser(
      {
        id: "aztaro97",
        last_name: "ABDOUL-AZIZ",
        image: "https://getstream.io/random_svg/?id=user1&name=User+1",
        age: 43,
      },
      client.devToken("aztaro97")
    );
    setIsReady(true);
  };

  useEffect(() => {
    connectUsers();

    return () => {
      client.disconnectUser();
    };
  }, []);

  if (!fontsLoaded || !isReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AuthenticatedUserProvider>
          <OverlayProvider>
            <Chat client={client}>
              <NavigationContainer>
                <NativeBaseProvider theme={theme}>
                  <View onLayout={onLayoutRootView} />
                  <AnimatePresence>{children}</AnimatePresence>
                  <StatusBar />
                </NativeBaseProvider>
              </NavigationContainer>
            </Chat>
          </OverlayProvider>
        </AuthenticatedUserProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default AppContainer;
