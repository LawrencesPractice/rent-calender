

import { initializeApp } from "firebase/app";
import "firebase/messaging";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getFirestore, doc, addDoc, collection, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHf4K_G5a2FQC0G0mxgup6LcPcszGH-DA",
    authDomain: "crwn-clothing-db-d869e.firebaseapp.com",
    projectId: "crwn-clothing-db-d869e",
    storageBucket: "crwn-clothing-db-d869e.appspot.com",
    messagingSenderId: "540637684181",
    appId: "1:540637684181:web:fedff762795227df779d5c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }

    return userDocRef;
};



export const createEventDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {

    const userDocRef = doc(db, "events", userAuth.uid);


    const { allEvents } = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
            allEvents,
            createdAt,
            ...additionalInformation,
        });
    } catch (error) {
        console.log("error creating the event", error.message);
    }


    return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);
