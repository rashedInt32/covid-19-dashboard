import * as firebase from 'firebase/app';
import 'firebase/analytics';
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase
export const initializeFirebase = () => firebase.initializeApp(firebaseConfig);
