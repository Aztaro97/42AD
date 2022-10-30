import { Box, Pressable, Text, useColorModeValue } from "native-base";
import React, { useState } from "react";
import { View, useWindowDimensions, Animated } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import BarQrCode from "../../components/barQrCode/barQrCode";
import CameraScanning from "../../components/cameraScanning/cameraScanning";
import { Color } from "../../constants/Colors";

const renderScene = SceneMap({
  first: BarQrCode,
  second: CameraScanning,
});

const QrCodeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "My Code" },
    { key: "second", title: "Scan Code" },
  ]);

  const renderTabBar = (props) => {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: useColorModeValue(Color.secondary, "gray.800"),
        }}
      >
        {props.navigationState.routes.map((route, i) => {
          return (
            <Pressable
              key={i}
              onPress={() => setIndex(i)}
              style={{
                flex: 1,
                padding: 16,
                borderBottomWidth: 4,
                borderBottomColor: i === index ? Color.primary : "transparent",
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

export default QrCodeScreen;
