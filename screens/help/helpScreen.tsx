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
      <Box bg={Color.secondary} w="full" h={50} alignItems="center">
        <Heading textAlign={"center"} bold color={Color.white}>
          Looking for help
        </Heading>
      </Box>

      <VStack space={2} px={3} mt={4}>
        <Card />
        <Card />
      </VStack>
    </Box>
  );
};

const Card = () => {
  return (
    <VStack bg={Color.secondary} p={4} borderRadius={10}>
      <Heading color={Color.white} mb={2}>
        Born2beroot
      </Heading>
      <HStack justifyContent={"space-between"} alignItems="center">
        <View flexDir={"row"} alignItems="center">
          <Icon
            color={Color.thirdly}
            mr={3}
            as={<Octicons name="checklist" size={24} color="black" />}
          />
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
