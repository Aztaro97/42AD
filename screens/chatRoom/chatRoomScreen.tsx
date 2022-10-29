import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Icon, Pressable } from "native-base";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  MessageList,
  Channel,
  MessageInput,
  useChatContext,
  useMessageInputContext,
  MessageType,
} from "stream-chat-expo";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import LoaderSpinner from "../../components/loaderSpinner";
import { Color } from "../../constants/Colors";

const ChatRoomScreen = () => {
  const [channel, setChannel] = useState(undefined);
  const route = useRoute();

  const { client } = useChatContext();
  const navigation = useNavigation();

  const { channelId } = route.params || {};

  useEffect(() => {
    const fetchChannel = async () => {
      setChannel(undefined);
      console.log("fetching channel", channelId);
      const channels = await client.queryChannels({ id: { $eq: channelId } });
      if (channels.length > 0) {
        setChannel(channels[0]);
      } else {
        console.log("No channels found");
      }
    };

    fetchChannel();
  }, [channelId]);

  if (!channel) {
    return (
      <Box flex={1} safeArea>
        <LoaderSpinner />
      </Box>
    );
  }

  return (
    <Box flex={1} safeAreaTop bg={Color.primary}>
      <Box py={4} justifyContent="center">
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            size="lg"
            ml={4}
            color="white"
            as={<AntDesign name="arrowleft" size={24} />}
          />
        </Pressable>
      </Box>
      <Box flex={1}>
        <Channel channel={channel} SendButton={SendButtonCustom}>
          <MessageList
            onThreadSelect={(thread) =>
              navigation.navigate("Thread", {
                channelId: channelId,
                thread,
              })
            }
          />
          <MessageInput />
        </Channel>
      </Box>
    </Box>
  );
};

const SendButtonCustom = () => {
  const { sendMessage, text, imageUploads, fileUploads } =
    useMessageInputContext();
  const isDisabled = !text && !imageUploads.length && !fileUploads.length;
  return (
    <TouchableOpacity disabled={isDisabled} onPress={sendMessage}>
      <Icon
        size="lg"
        mr={3}
        mb={1}
        color={isDisabled ? "gray.400" : "primary.500"}
        as={<FontAwesome name="send-o" size={24} color="black" />}
      />
    </TouchableOpacity>
  );
};

export default ChatRoomScreen;
