import { Box, Text } from "native-base";
import React from "react";
import { Color } from "../../constants/Colors";

const EventScreen = () => {
  return (
    <Box flex={1} px={1} bg={Color.primary}>
      <Text>EventScreen</Text>
    </Box>
  );
};

export default EventScreen;
