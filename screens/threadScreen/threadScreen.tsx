import { useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Channel, useChatContext, Thread } from "stream-chat-expo";
import LoaderSpinner from "../../components/loaderSpinner";

const ThreadScreen = () => {
  const [channel, setChannel] = useState(null);
  const route = useRoute();

  const { client } = useChatContext();

  const { channelId, thread } = route.params || {};

  useEffect(() => {
    const fetchChannel = async () => {
      setChannel(null);
      const channels = await client.queryChannels({ id: { $eq: channelId } });
      if (channels.length > 0) {
        setChannel(channels[0]);
      }
    };

    fetchChannel();
  }, [channelId]);

  if (!channel) {
    return <LoaderSpinner />;
  }

  return (
    <Channel channel={channel} thread={thread}>
      <Thread />
    </Channel>
  );
};

export default ThreadScreen;
