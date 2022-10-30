import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  View,
  Icon,
  Center,
} from "native-base";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Color } from "../../constants/Colors";

const HelpScreen = () => {
  return (
    <Box flex={1}>
      <Box bg={Color.secondary} w="full" h={100} alignItems="center">
        <Heading textAlign={"center"} bold color={Color.white}>
          Looking for help
        </Heading>
      </Box>

      <VStack space={2}> 
        <Card />
        <Card />
      </VStack>
    </Box>
  );
};

const Card = () => {
  return (
    <VStack bg={Color.secondary} p={2}>
      <Heading color={Color.white}>Born2beroot</Heading>
      <HStack justifyContent={"space-between"} alignItems="center">
        <View>
          <Icon color={Color.thirdly} as={<Octicons name="checklist" size={24} color="black" />} />
          <Text color={Color.white} bold>
            szubair
          </Text>
        </View>
        <Text color={Color.white}>30 min ago </Text>
      </HStack>
    </VStack>
  );
};

export default HelpScreen;
