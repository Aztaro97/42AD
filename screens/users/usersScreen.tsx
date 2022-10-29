import {
  collection,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from "firebase/firestore";
import { Box, FlatList } from "native-base";
import React, { useEffect, useState } from "react";
import FilterUser from "../../components/FilterUser/filterUser";
import HeaderStudentSearch from "../../components/headerStudentSearch";
import LoaderSpinner from "../../components/loaderSpinner";

import ProfileCard from "../../components/profileCard";
import { db } from "../../config/firebase";

const StudentsScreen = () => {
  const [usersList, setUsersList] = useState<any[]>([]);
  const [filterUsersList, setFilterUsersList] = useState<any[]>([]);
  const [postPerLoad] = useState<number>(20);
  const [beginAfter, setBeginAfter] = useState<number>(0);
  const [lastUsers, setLastUsers] = useState<boolean>(false);
  const [textInput, setTextInput] = useState("");

  const fetchAllUsers = async (postPerLoad: number) => {
    let lastVisible;
    try {
      const querySnapShot = await query(
        collection(db, "students"),
        limit(postPerLoad)
      );
      const docRef = await getDocs(querySnapShot);
      lastVisible = docRef.docs[docRef.docs.length - 1];
      setBeginAfter(lastVisible);

      let userData: any[] = [];
      docRef.forEach((doc: QueryDocumentSnapshot) => {
        const data = doc.data();
        userData.push({ ...data, id: doc.id });
      });
      setUsersList(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const getMoreUsers = async (beginAfter: number, postPerLoad: number) => {
    let lastVisible;
    try {
      if (lastUsers) return;
      const querySnapShot = await query(
        collection(db, "students"),
        startAfter(beginAfter),
        limit(postPerLoad)
      );
      const docRef = await getDocs(querySnapShot);
      lastVisible = docRef.docs[docRef.docs.length - 1];
      setBeginAfter(lastVisible);

      let userData: any[] = [];
      docRef.forEach((doc: QueryDocumentSnapshot) => {
        const data = doc.data();
        userData.push({ ...data, id: doc.id });
      });
      setUsersList((pre) => [...pre, ...userData]);
      userData.length === 0 ? setLastUsers(true) : setLastUsers(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers(postPerLoad);
  }, [postPerLoad]);

  return (
    <Box flex={1} px={3} safeArea bg="#fff">
      <HeaderStudentSearch
        setFilterUsersList={setFilterUsersList}
        setTextInput={setTextInput}
        textInput={textInput}
      />
      {!textInput ? (
        <FlatList
          data={usersList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProfileCard {...item} />}
          initialNumToRender={10}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          onEndReached={() => getMoreUsers(beginAfter, postPerLoad)}
          onEndReachedThreshold={0.01}
          scrollEventThrottle={150}
          ListFooterComponent={() =>
            !lastUsers ? <LoaderSpinner label="Load Students" /> : null
          }
        />
      ) : (
        <FilterUser filterUsersList={filterUsersList} />
      )}
    </Box>
  );
};

export default StudentsScreen;
