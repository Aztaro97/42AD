import { Box, Text } from "native-base";
import React, { useState } from "react";
import { ChannelList, ChannelPreviewTitleProps } from "stream-chat-expo";
import { useNavigation } from "@react-navigation/native";
import LoaderSpinner from "../../components/loaderSpinner";
import HeaderChatSearch from "../../components/headerChatSearch";
import { Color } from "../../constants/Colors";

const ChatListScreen = () => {
  const [textInput, setTextInput] = useState("");
  const [limitPerLoad] = useState(20);
  const navigation = useNavigation();

  const onChannelPressed = (channel: any) => {
    navigation.navigate("ChatRoom", { channelId: channel.id });
  };

  const options = { limit: limitPerLoad };

  const filters = {
    type: "messaging",
    members: {
      $in: [textInput],
    },
  };

  const CustomPreviewTitle = ({
    displayName,
    channel,
  }: ChannelPreviewTitleProps) => {
    const membersArrays = Object.values(channel?.state?.members);
    const guestUser = membersArrays.find(
      (member: any) => member.user.last_name === displayName
    );
    const { roll_no, classType } = guestUser?.user;
    return (
      <Box flex={1} w="full">
        <Text fontSize={12} bold color={Color.primary}>
          {displayName}
        </Text>
        <Text fontSize={11}>
          Class: <Text bold>{classType} </Text> {" | "} Roll No:
          <Text bold> {roll_no} </Text>
        </Text>
      </Box>
    );
  };

  return (
    <Box flex={1} bg={Color.primary}>
      <HeaderChatSearch setTextInput={setTextInput} textInput={textInput} />
      <ChannelList
        PreviewTitle={CustomPreviewTitle}
        onSelect={onChannelPressed}
        filters={textInput === "" ? {} : filters}
        options={options}
        numberOfSkeletons={limitPerLoad}
        FooterLoadingIndicator={() => <LoaderSpinner label="Load the Chats" />}
      />
    </Box>
  );
};

export default ChatListScreen;
