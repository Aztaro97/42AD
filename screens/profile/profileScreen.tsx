import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Text } from "native-base";
import React, { useState } from "react";

const ProfileScreen = () => {
  const route = useRoute();

  return (
    <Box flex={1} safeArea px={3}>
      <Text fontSize={20} mt={5} ml={3} color="gray.100">
        Profile
      </Text>
    </Box>
  );
};

export default ProfileScreen;
