import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, Auth, UserCredential } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { Injectable } from '@angular/core';

const firebaseConfig = {
  apiKey: "AIzaSyDfA1u8dD8UnBStomM5vRNupK4H456IW48",
  authDomain: "nwmsu-event-manager.firebaseapp.com",
  projectId: "nwmsu-event-manager",
  storageBucket: "nwmsu-event-manager.firebasestorage.app",
  messagingSenderId: "933816110403",
  appId: "1:933816110403:web:5b2cc4a9a3259f94dc73f6",
  measurementId: "G-ZVF490QDTD"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp); // Initialize Firestore

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {}

  // Login method (also fetches role)
  async login(email: string, password: string): Promise<{ user: UserCredential; role: string | null }> {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Fetch user role from Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      return { user: userCredential, role: userData['role'] }; // Return role
    } else {
      return { user: userCredential, role: null }; // No role found
    }
  }

  // Sign-up method (adds email and role to Firestore)
  async signUp(email: string, password: string, role: string): Promise<UserCredential> {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user email and role in Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email, // Save email
      role: role         // Save role (user/admin)
    });

    return userCredential;
  }
}
