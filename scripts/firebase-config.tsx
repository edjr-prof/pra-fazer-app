import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBFd8G0c4b0LdIm3nm9y2gclaM28u89Cog",
  authDomain: "projetos-2026-1-cf71a.firebaseapp.com",
  projectId: "projetos-2026-1-cf71a",
  storageBucket: "projetos-2026-1-cf71a.firebasestorage.app",
  messagingSenderId: "912030276057",
  appId: "1:912030276057:web:774ed9cd2b5da1f27b21c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };

