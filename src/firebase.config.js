// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmIq4e10vNQTT9rv74AmlI3yirun4LfNE',
  authDomain: 'house-marketplace-app-847a9.firebaseapp.com',
  projectId: 'house-marketplace-app-847a9',
  storageBucket: 'house-marketplace-app-847a9.appspot.com',
  messagingSenderId: '210948198611',
  appId: '1:210948198611:web:fd3f4f0671707048bcc426',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
