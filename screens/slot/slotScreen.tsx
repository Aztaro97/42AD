import { Box, Pressable, Text, useColorModeValue } from "native-base";
import React, { useState } from "react";
import { View, useWindowDimensions, Animated } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { Color } from "../../constants/Colors";

const SlotComponent = () => {
  return (
    <Box flex={1} bg={Color.primary}>
      <Text>Slot</Text>
    </Box>
  );
};

const EvaluationComponent = () => {
  return (
    <Box flex={1} bg={Color.primary}>
      <Text>Slot</Text>
    </Box>
  );
};

const renderScene = SceneMap({
  first: SlotComponent,
  second: EvaluationComponent,
});

const SlotScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Slot" },
    { key: "second", title: "Evaluation" },
  ]);

  return (
    <Box flex={1}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
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
          </View>
        )}
      />
    </Box>
  );
};

export default SlotScreen;
