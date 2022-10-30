import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Progress,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import { compareAsc, format, formatDistanceToNow } from "date-fns";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Color } from "../../constants/Colors";
import { useTypeSelector } from "../../hook/useTypeSelector";

const HomeScreen = () => {
  const { userInfo } = useTypeSelector((state) => state.auth);

  const {
    id,
    displayname,
    email,
    image_url,
    status,
    cursus,
    correction_point,
  } = userInfo;

  //   const {
  //     level,
  //     blackholed_at,
  //     user: { wallet },
  //   } = cursus[1];

  return (
    <Box flex={1} bg={Color.primary}>
      <Box w="full" bg={Color.secondary} py={4} px={3}>
        <Center>
          <HStack space={3} alignItems="center" mb={1}>
            <Icon size="lg" color="#fff" as={<AntDesign name="Trophy" />} />
            <Text color={Color.white}>12</Text>
            <Divider
              orientation="vertical"
              _light={{
                bg: Color.thirdly,
              }}
              _dark={{
                bg: "muted.50",
              }}
            />
            <Icon
              size="lg"
              color="#fff"
              as={<MaterialCommunityIcons name="heart-box-outline" />}
            />
            <Text color={Color.white}>54</Text>
          </HStack>
          <Heading color={Color.white}>{displayname}</Heading>
          <Text color={Color.white}>{email}</Text>
        </Center>
      </Box>

      <Center mt={10}>
        <VStack space={4} w={300} bg={Color.secondary} p={6} borderRadius={20}>
          <Center borderRadius={20}>
            <Heading color={Color.white} bold>
              Available
            </Heading>
            <Text color={Color.thirdly}>lab1r3s5</Text>
          </Center>
          <Center borderRadius={20}>
            <Heading color={Color.white} bold>
              Black hole
            </Heading>
            <Text color={Color.thirdly} fontSize={20}>
              {/* {formatDistanceToNow(new Date(cursus[1]?.blackholed_at))} */}
            </Text>
          </Center>
          <Center borderRadius={20}>
            <Progress
              size="sm"
              mb={1}
              value={35}
              w={"full"}
              colorScheme={Color.thirdly}
            />

            <HStack
              justifyContent={"space-between"}
              w="full"
              alignItems={"center"}
            >
              <Flex
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Box
                  w={4}
                  h={4}
                  bg={Color.thirdly}
                  borderRadius={5}
                  mr={2}
                ></Box>
                <Text color={Color.thirdly} bold>
                  {/* level {cursus[1]?.level} */}
                </Text>
              </Flex>
              <Text color={Color.thirdly} bold>
                40/100
              </Text>
            </HStack>
          </Center>
        </VStack>
      </Center>

      <Center mt={10}>
        <VStack space={4} w={300} bg={Color.secondary} p={6} borderRadius={20}>
          <Flex flexDir={"row"} justifyContent="space-between">
            <Text color={Color.white} bold>
              Wallet
            </Text>
            <Text color={Color.thirdly} bold>
              {/* {cursus[1]?.user?.wallet} */}
            </Text>
          </Flex>
          <Flex flexDir={"row"} justifyContent="space-between">
            <Text color={Color.white} bold>
              Evaluation Points
            </Text>
            <Text color={Color.thirdly} bold>
              {correction_point}
            </Text>
          </Flex>
          <Flex flexDir={"row"} justifyContent="space-between">
            <Text color={Color.white} bold>
              Grade
            </Text>
            <Text color={Color.thirdly} bold>
              Cursus
            </Text>
          </Flex>
          <Flex flexDir={"row"} justifyContent="space-between">
            <Text color={Color.white} bold>
              Status
            </Text>
            <Text color={Color.thirdly} bold>
              {status}
            </Text>
          </Flex>
          <Flex flexDir={"row"} justifyContent="space-between">
            <Text color={Color.white} bold>
              LogTime
            </Text>
            <Text color={Color.thirdly} bold>
              23 hours
            </Text>
          </Flex>
        </VStack>
      </Center>
    </Box>
  );
};

export default HomeScreen;
