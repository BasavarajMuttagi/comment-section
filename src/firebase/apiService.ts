import { doc, getDoc, setDoc } from "firebase/firestore";

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { db, auth } from "./firebase";

type UserData = {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
};

async function createUser(uid: string, userData: UserData) {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      console.log("User already exists");
    } else {
      await setDoc(userDocRef, userData);
      console.log("User created successfully");
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

const handleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const {
      user: { displayName, email, photoURL, providerId },
    } = await signInWithPopup(auth, provider);
    await createUser(providerId, { displayName, email, photoURL });
    toast.success(`Welcome ${displayName}`);
  } catch (error) {
    console.error("Error during sign-in:", error);
    toast.error("Error during sign-in");
  }
};

const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error during sign-out:", error);
    toast.error("Error during sign-out");
  }
};
export { createUser, handleSignIn, handleLogout };
