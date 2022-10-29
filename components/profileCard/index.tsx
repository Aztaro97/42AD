import { useNavigation } from "@react-navigation/native";
import { HStack, Image, Pressable, Text, VStack } from "native-base";
import React, { memo } from "react";
import { Color } from "../../constants/Colors";
import { User } from "../../types/userType";

const ProfileCard = (props: User) => {
  const { id, last_name, image, roll_no, classType } = props;
  const navigation = useNavigation();

  const onPress = async () => {
    navigation.navigate("Profile", props);
  };
  return (
    <Pressable onPress={onPress}>
      <HStack mb={2} space={3} py={2} px={2} bg="indigo.50" borderRadius={10}>
        <Image
          w={60}
          h={60}
          borderRadius={10}
          source={{ uri: image }}
          alt={last_name}
        />
        <VStack justifyContent="center">
          <Text fontSize={17}>
            Last Name:{" "}
            <Text bold color={Color.primary}>
              {last_name}
            </Text>
          </Text>
          <Text fontSize={12}>
            Class: <Text bold>{classType}</Text>
          </Text>
          <Text fontSize={12}>
            Roll No: <Text bold>{roll_no}</Text>
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default memo(ProfileCard);
