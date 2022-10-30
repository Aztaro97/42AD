import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  FontAwesome5,
  Ionicons,
  Feather,
  SimpleLineIcons,
  Entypo,
} from "@expo/vector-icons";
import { Color } from "../../constants/Colors";
import { Box, HStack, Icon, Text, View } from "native-base";
import StudentsScreen from "../../screens/users/usersScreen";
import ChatListScreen from "../../screens/chatList/chatListScreen";
import ProfileScreen from "../../screens/profile/profileScreen";
import HomeScreen from "../../screens/home/homeScreen";
import SlotScreen from "../../screens/slot/slotScreen";
import HelpScreen from "../../screens/help/helpScreen";
import EventScreen from "../../screens/event/eventScreen";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarHeader = () => {
  const navigation = useNavigation();
  return (
    <Box bg={Color.secondary} p={5} safeArea>
      <HStack justifyContent={"space-between"}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Icon
            size="xl"
            color={Color.gray}
            as={<Ionicons name="menu-outline" />}
          />
        </Pressable>
        <Icon
          size="xl"
          color={Color.gray}
          as={<Ionicons name="notifications-outline" />}
        />
      </HStack>
    </Box>
  );
};

const MainTabsScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeListTab"
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 7,
          paddingTop: 7,
          backgroundColor: Color.secondary,
        },
        tabBarShowLabel: true,
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Color.thirdly,
        header: TabBarHeader,
      }}
    >
      <Tab.Screen
        name="HomeListTab"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          //   headerShown: false,
        }}
      />
      <Tab.Screen
        name="EventTabs"
        component={EventScreen}
        options={{
          tabBarLabel: "Event",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="event" size={size} color={color} />
          ),

          //   headerShown: false,
        }}
      />
      <Tab.Screen
        name="SlotListTab"
        component={SlotScreen}
        options={{
          tabBarLabel: "Slot",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="time-slot" size={size} color={color} />
          ),
          //   headerShown: false,
        }}
      />
      <Tab.Screen
        name="ChatListTab"
        component={ChatStackScreen}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ios-chatbubbles-outline"
              size={size}
              color={color}
            />
          ),
          //   headerShown: false,
        }}
      />

      <Tab.Screen
        name="HelpTabs"
        component={HelpScreen}
        options={{
          tabBarLabel: "Help",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hand-paper" size={size} color={color} />
          ),

          //   headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const ChatStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="ChatList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="ChatList" component={ChatListScreen} />
    </HomeStack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
    </HomeStack.Navigator>
  );
};
export default MainTabsScreen;
