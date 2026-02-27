import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

async function getReferralUsers(referrerUid) {
  try {
    // 1️⃣ Get referrer document
    const referrerSnap = await getDoc(doc(db, "users", referrerUid));

    if (!referrerSnap.exists()) {
      console.log("Referrer not found");
      return [];
    }

    const referrals = referrerSnap.data().referrals || [];

    if (referrals.length === 0) {
      console.log("No referrals yet");
      return [];
    }

    // 2️⃣ Fetch all referral user documents in parallel
    const referralUsers = await Promise.all(
      referrals.map(async (uid) => {
        const userSnap = await getDoc(doc(db, "users", uid));
        return userSnap.exists()
          ? { id: userSnap.id, ...userSnap.data() }
          : null;
      }),
    );

    // 3️⃣ Remove null values (in case a user was deleted)
    return referralUsers.filter((user) => user !== null);
  } catch (error) {
    console.error("Error fetching referrals:", error);
    return [];
  }
}

export { getReferralUsers };
