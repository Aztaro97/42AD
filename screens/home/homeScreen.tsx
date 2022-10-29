import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Icon,
  Text,
  View,
} from "native-base";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Color } from "../../constants/Colors";

const HomeScreen = () => {
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
          <Heading color={Color.white}>Ahmed Mohammed</Heading>
          <Text color={Color.white}>moha@student.42abudhabi.ae</Text>
        </Center>
      </Box>

      <Center mt={10}>
        <View bg={Color.secondary} p={10} borderRadius={20}>
          <Heading color={Color.white}>Ahmed Mohammed</Heading>
          <Text color={Color.white}>moha@student.42abudhabi.ae</Text>
        </View>
      </Center>
    </Box>
  );
};

export default HomeScreen;
