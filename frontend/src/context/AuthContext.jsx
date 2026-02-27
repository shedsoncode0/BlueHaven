import { createContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
  getDocs,
  query,
  collection,
  updateDoc,
  arrayUnion,
  where,
} from "firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null); // Firebase Auth
  const [user, setUser] = useState(null); // Firestore profile
  const [loading, setLoading] = useState(true);

  const register = async (fullName, email, password, referralCodeInput) => { 
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
      stage: { name: "Standard", level: 1 },
      referralCode,
      referrals: [],
      verified: false,
      profileImage: "",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    // 4️⃣ If referral code was provided → check it
    if (referralCodeInput) {
      const q = query(
        collection(db, "users"),
        where("referralCode", "==", referralCodeInput.toUpperCase()),
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const referrerDoc = querySnapshot.docs[0];
        const referrerUid = referrerDoc.id;

        if (referrerUid === newUser.uid) {
          console.log("User cannot refer themselves");
          return;
        }

        await updateDoc(doc(db, "users", referrerUid), {
          referrals: arrayUnion(newUser.uid),
        });

        console.log("Referral applied successfully");
      } else {
        console.log("Invalid referral code");
      }
    }

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
