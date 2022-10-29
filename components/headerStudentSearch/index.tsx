import { collection, getDocs, query, where } from "firebase/firestore";
import { Box, Button, Input } from "native-base";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Color } from "../../constants/Colors";
import useDebounce from "../../hook/useDebounce";

interface Props {
  setFilterUsersList: React.Dispatch<React.SetStateAction<any[]>>;
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
  textInput: string;
}

const HeaderStudentSearch = ({
  setFilterUsersList,
  setTextInput,
  textInput,
}: Props) => {
  const debounceValue = useDebounce(textInput, 400);

  const handleSearch = async (inputValue: string) => {
    try {
      let usersFilter = new Array();
      const q = await query(
        collection(db, "students"),
        where("last_name", "==", inputValue)
      );
      const querySnapShot = await getDocs(q);
      querySnapShot.docs.forEach((doc) => {
        usersFilter.push({ ...doc.data(), id: doc.id });
      });
      setFilterUsersList(usersFilter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    textInput !== "" && handleSearch(textInput);
  }, [debounceValue]);

  return (
    <Box my={2} px={3} py={4}>
      <Input
        size={"lg"}
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

export default HeaderStudentSearch;
