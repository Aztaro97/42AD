import { Box, Center, Image, Text } from "native-base";
import React from "react";
import { Color } from "../../constants/Colors";

const BarQrCode = () => {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems={"center"}
      bg={Color.secondary}
	  opacity=".95"
      safeArea
    >
      <Center>
        <Box bg="#fff" px={4} py={4} borderRadius={10}>
          <Image
            w={200}
            h={200}
            source={require("../../assets/images/qr_default.png")}
            alt="qrcode"
          />
        </Box>
        <Text color={Color.white}>BarQrCode</Text>
      </Center>
    </Box>
  );
};

export default BarQrCode;
