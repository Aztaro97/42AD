// import { initializeApp, getApp, getApps } from 'firebase/app';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import { getFirestore } from "firebase/firestore"
// import {
// 	FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN,
// 	FIREBASE_DATABASE_URL,
// 	FIREBASE_PROJECT_ID,
// 	FIREBASE_STORAGE_BUCKET,
// 	FIREBASE_MESSAGING_SENDER_ID,
// 	FIREBASE_APP_ID
// } from "@env"
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import "firebase/firestore";
// const firebaseConfig = {
// 	apiKey: FIREBASE_API_KEY,
// 	authDomain: FIREBASE_AUTH_DOMAIN,
// 	databaseURL: FIREBASE_DATABASE_URL,
// 	projectId: FIREBASE_PROJECT_ID,
// 	storageBucket: FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
// 	appId: FIREBASE_APP_ID,
// };

// // initialize firebase
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();



// // initialize auth
// const auth = initializeAuth(app, {
// 	persistence: getReactNativePersistence(AsyncStorage),
// });

// const db = getFirestore()

// export { auth, db };