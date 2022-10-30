import {
  Box,
  Pressable,
  Text,
  useColorModeValue,
  Center,
  ScrollView,
} from "native-base";
import React, { useState } from "react";
import { View, useWindowDimensions, Animated } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import OverviewTabs from "../../components/profileTabs/overviewTabs/overviewTabs";
import { Color } from "../../constants/Colors";

const SecondRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
  </Center>
);

const ThirdRoute = () => (
  <Center flex={1} my="4">
    This is Tab 3
  </Center>
);

const FourthRoute = () => (
  <Center flex={1} my="4">
    This is Tab 4{" "}
  </Center>
);

const FiveRoute = () => (
  <Center flex={1} my="4">
    This is Tab 4{" "}
  </Center>
);

const SixRoute = () => (
  <Center flex={1} my="4">
    This is Tab 4{" "}
  </Center>
);

const SeventhRoute = () => (
  <Center flex={1} my="4">
    This is Tab 4{" "}
  </Center>
);

const renderScene = SceneMap({
  first: OverviewTabs,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  five: FiveRoute,
  six: SixRoute,
  seventh: SeventhRoute,
});

const ProfileScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Overview" },
    { key: "second", title: "Projects" },
    { key: "third", title: "Black Hole" },
    { key: "fourth", title: "Evaluations" },
    { key: "five", title: "Achievement" },
    { key: "six", title: "Parthnership" },
    { key: "seventh", title: "Evaluations" },
  ]);

  const renderTabBar = (props) => {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: useColorModeValue(Color.secondary, "gray.800"),
        }}
      >
        <ScrollView horizontal>
          {props.navigationState.routes.map((route, i) => {
            return (
              <Pressable
                key={i}
                onPress={() => setIndex(i)}
                style={{
                  flex: 1,
                  padding: 16,
                  borderBottomWidth: 4,
                  borderBottomColor:
                    i === index ? Color.primary : "transparent",
                }}
              >
                <Text
                  textAlign={"center"}
                  color={i === index ? Color.white : "gray.500"}
                >
                  {route.title}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <Box flex={1}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </Box>
  );
};

export default ProfileScreen;
