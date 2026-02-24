import { createContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null); // Firebase Auth
  const [user, setUser] = useState(null); // Firestore profile
  const [loading, setLoading] = useState(true);

  const register = async (fullName, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const newUser = userCredential.user;

    // Generate referral code
    const referralCode = newUser.uid.slice(0, 6).toUpperCase();

    // Update displayName in Firebase Auth
    await updateProfile(newUser, { displayName: fullName });

    // Save profile in Firestore
    await setDoc(doc(db, "users", newUser.uid), {
      uid: newUser.uid,
      fullName,
      email,
      stage: { name: "Standard", type: "Beginner" },
      level: 1,
      referralCode,
      referrals: [],
      verified: false,
      profileImage: "",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return newUser;
  };

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const fetchUserData = async (uid) => {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setUser(docSnap.data()); // ✅ fixed
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setAuthUser(user);
      if (user) {
        await fetchUserData(user.uid);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ authUser, user, register, login, logout, loading }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
