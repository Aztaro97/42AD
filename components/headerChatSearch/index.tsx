import { Box, Input } from "native-base";
import React, { useEffect, useState } from "react";
import { Color } from "../../constants/Colors";

interface HeaderChatSearchProps {
  textInput: string;
  setTextInput: (text: string) => void;
}

const HeaderChatSearch = ({
  textInput,
  setTextInput,
}: HeaderChatSearchProps) => {
  return (
    <Box my={2} px={5} py={4}>
      <Input
        size={"lg"}
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
        placeholder="Search Student"
        _focus={{
          bg: "#fff",
          borderColor: Color.primary,
        }}
      />
    </Box>
  );
};

export default HeaderChatSearch;
