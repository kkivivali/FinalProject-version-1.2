import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const ApiKey = process.env.REACT_APP_FINALPROJECT_API_KEY
const AuthDomain = process.env.REACT_APP_FINALPROJECT_AUTH_DOMAIN
const ProjectID = process.env.REACT_APP_FINALPROJECT_PROJECT_ID
const StorageBucket = process.env.REACT_APP_FINALPROJECT_STORAGE_BUCKET
const MessagingSenderID = process.env.REACT_APP_FINALPROJECT_MESSAGING_SENDER_ID
const Firebase_APP_ID = process.env.REACT_APP_FINALPROJECT_APP_ID

const firebaseConfig = {
  apiKey: ApiKey,
  authDomain: AuthDomain,
  projectId: ProjectID,
  storageBucket: StorageBucket,
  messagingSenderId: MessagingSenderID,
  appId: Firebase_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app