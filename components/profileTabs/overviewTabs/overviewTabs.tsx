import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Progress,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import { Color } from "../../../constants/Colors";

const OverviewTabs = () => {
  return (
    <Box flex={1} px={3} bg={Color.primary}>
      <HStack
        mt={4}
        p={3}
        space={4}
        alignItems="center"
        bg={Color.secondary}
        borderRadius={20}
      >
        <Image
          borderRadius={50}
          w={100}
          h={100}
          source={{ uri: "https://i.pravatar.cc/300" }}
          alt="profile"
        />
        <View>
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
        </View>
      </HStack>

      <VStack space={4} mt={4} bg={Color.secondary} p={6} borderRadius={20}>
        <Flex flexDir={"row"} justifyContent="space-between">
          <Text color={Color.white} bold>
            Phone
          </Text>
          <Text color={Color.thirdly} bold>
            052 456 9875
          </Text>
        </Flex>
        <Flex flexDir={"row"} justifyContent="space-between">
          <Text color={Color.white} bold>
            Location
          </Text>
          <Text color={Color.thirdly} bold>
            Abu Dhabi, UAE
          </Text>
        </Flex>
        <Flex flexDir={"row"} justifyContent="space-between">
          <Text color={Color.white} bold>
            Grade
          </Text>
          <Text color={Color.thirdly} bold>
            Learner
          </Text>
        </Flex>
        <Flex flexDir={"row"} justifyContent="space-between">
          <Text color={Color.white} bold>
            Status
          </Text>
          <Text color={Color.thirdly} bold>
            Student
          </Text>
        </Flex>
        <Flex flexDir={"row"} justifyContent="space-between">
          <Text color={Color.white} bold>
            Available
          </Text>
          <Text color={Color.thirdly} bold>
            lab1r3s5
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default OverviewTabs;
