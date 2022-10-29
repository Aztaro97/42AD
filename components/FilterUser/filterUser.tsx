import React from "react";
import { FlatList } from "react-native-gesture-handler";
import ProfileCard from "../profileCard";

interface Props {
  filterUsersList: any[];
}

const FilterUser = ({ filterUsersList }: Props) => {
  return (
    <FlatList
      data={filterUsersList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProfileCard {...item} />}
      initialNumToRender={10}
      removeClippedSubviews={true}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FilterUser;
