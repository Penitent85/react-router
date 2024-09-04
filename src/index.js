import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
const firebaseConfig = {
  apiKey: "AIzaSyCM9r9VMh1-k9RAzX-JNGduqGTTCyePjlQ",
  authDomain: "web-messanger-26866.firebaseapp.com",
  projectId: "web-messanger-26866",
  storageBucket: "web-messanger-26866.appspot.com",
  messagingSenderId: "214117346881",
  appId: "1:214117346881:web:3d0d6b603980afd66860c0",
  measurementId: "G-5P5JPGCFQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 
