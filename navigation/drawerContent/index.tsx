import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  Progress,
  Text,
  useColorModeValue,
  View,
  VStack,
} from "native-base";
import React from "react";
import {
  Feather,
  FontAwesome,
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Color } from "../../constants/Colors";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const DrawerContentScreen = (props: DrawerContentComponentProps) => {
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        props.navigation.closeDrawer();
        console.log("User Log Out");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box flex={1} bg={useColorModeValue(Color.secondary, "gray.500")}>
      <DrawerContentScrollView {...props}>
        <Box flex={1} justifyContent={"space-between"} h="full" pb="3">
          <UserCard />
          <DrawerNavigation {...props} />

          <Text fontSize={20} mt={5} ml={3} color="gray.100">
            Preferences
          </Text>
        </Box>
      </DrawerContentScrollView>
      <DrawerItem
        labelStyle={{ color: "#fff" }}
        label="Sign Out"
        onPress={handleLogOut}
        icon={({ color, size, focused }) => (
          <Feather name="log-out" size={size} color={"#fff"} />
        )}
      />
    </Box>
  );
};

const UserCard = () => {
  const navigation = useNavigation();
  return (
    <Box bg={Color.primary} px={4} py={4}>
      <HStack>
        <Box>
          <Image
            borderRadius={50}
            w={100}
            h={100}
            source={{ uri: "https://i.pravatar.cc/300" }}
            alt="profile"
          />
          <Heading color={Color.white} fontSize={17}>
            Mohammed Ali
          </Heading>
          <Text color={Color.white} fontSize={15} mb={4}>
            moha@student.42abudhabi.ae
          </Text>

          <Progress size="sm" mb={1} value={35} colorScheme={Color.secondary} />
          <Flex direction="row" alignItems={"center"}>
            <Box w={4} h={4} bg={Color.white} borderRadius={5} mr={2}></Box>
            <Text color={Color.white}>level 2.45</Text>
          </Flex>
        </Box>
        <Pressable onPress={() => navigation.navigate("QrCodeScreen")}>
          <Icon
            color={Color.white}
            fontSize={50}
            size="4xl"
            as={<MaterialIcons name="qr-code" />}
          />
        </Pressable>
      </HStack>
    </Box>
  );
};

const CustomDivider = () => {
  return (
    <Divider
      my="2"
      _light={{
        bg: Color.primary,
      }}
      _dark={{
        bg: "muted.50",
      }}
    />
  );
};

const DrawerNavigation = (props: DrawerContentComponentProps) => {
  const navLinks = [
    {
      label: "Home",
      icon: <Feather name="home" size={20} color="#fff" />,
      link: "Orders",
    },
    {
      label: "Users",
      icon: <FontAwesome name="user-o" size={20} color="#fff" />,
      link: "Users",
    },
    {
      label: "Projects",
      icon: <FontAwesome5 name="tasks" size={20} color="#fff" />,
      link: "Favorite",
    },
    {
      label: "E-learning",
      icon: <Ionicons name="settings-outline" size={20} color="#fff" />,
      link: "Setting",
    },
  ];

  const navTools = [
    {
      label: "Chat",
      icon: (
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="#fff" />
      ),
      link: "Setting",
    },
    {
      label: "Help",
      icon: <Ionicons name="settings-outline" size={20} color="#fff" />,
      link: "Setting",
    },
    {
      label: "Settings",
      icon: <Ionicons name="settings-outline" size={20} color="#fff" />,
      link: "Setting",
    },
  ];

  const navInfos = [
    {
      label: "About",
      icon: <AntDesign name="exclamationcircleo" size={20} color="#fff" />,
      link: "Setting",
    },
    {
      label: "Share",
      icon: <AntDesign name="sharealt" size={20} color="#fff" />,
      link: "Setting",
    },
    {
      label: "Settings",
      icon: <Ionicons name="settings-outline" size={20} color="#fff" />,
      link: "Setting",
    },
  ];

  return (
    <VStack space={0} mt={2}>
      {navLinks.map((item, index) => (
        <View key={index}>
          <DrawerItem
            style={{ backgroundColor: "transparent" }}
            inactiveTintColor="#fff"
            labelStyle={{ color: "#fff", fontWeight: "600", fontSize: 15 }}
            icon={({ color, size }) => item.icon}
            label={item.label}
            onPress={() => props.navigation.closeDrawer()}
            activeBackgroundColor={useColorModeValue("#333", "gray.500")}
          />
        </View>
      ))}
      <CustomDivider />

      {/* Tool Divider */}
      {navTools.map((item, index) => (
        <View key={index}>
          <DrawerItem
            style={{ backgroundColor: "transparent" }}
            inactiveTintColor="#fff"
            labelStyle={{ color: "#fff", fontWeight: "600", fontSize: 15 }}
            icon={({ color, size }) => item.icon}
            label={item.label}
            onPress={() => props.navigation.closeDrawer()}
            activeBackgroundColor={useColorModeValue("#333", "gray.500")}
          />
        </View>
      ))}
      <CustomDivider />

      {/* Info Divider */}
      {navInfos.map((item, index) => (
        <View key={index}>
          <DrawerItem
            style={{ backgroundColor: "transparent" }}
            inactiveTintColor="#fff"
            labelStyle={{ color: "#fff", fontWeight: "600", fontSize: 15 }}
            icon={({ color, size }) => item.icon}
            label={item.label}
            onPress={() => props.navigation.closeDrawer()}
            activeBackgroundColor={useColorModeValue("#333", "gray.500")}
          />
        </View>
      ))}
    </VStack>
  );
};

export default DrawerContentScreen;
