import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "native-base";
import React from "react";
import ChatRoomScreen from "../../screens/chatRoom/chatRoomScreen";
import QrCodeScreen from "../../screens/qrCode/qrCodeScreen";
import ThreadScreen from "../../screens/threadScreen/threadScreen";
import { HomeDrawerParamsList } from "../../types/navigationTypes";
import DrawerContentScreen from "../drawerContent";
import MainTabsScreen from "../mainTabs";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator<HomeDrawerParamsList>();

const RootStackScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeDrawer"
      drawerContent={(props) => <DrawerContentScreen {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeDrawer" component={MainTabsScreen} />
      <Drawer.Screen name="ChatRoom" component={ChatRoomScreen} />
      <Drawer.Screen name="Thread" component={ThreadScreen} />
      <Drawer.Screen
        name="QrCodeScreen"
        component={QrCodeScreen}
        options={{
          headerShown: true,
          headerTitle: "QR Code",
          drawerIcon: (config) => (
            <Icon size={23} as={<Ionicons name="arrow-back" />} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default RootStackScreen;
