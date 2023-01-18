import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";

import './index.scss';

import Initial from './pages/Initial';

import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyBWxV35-gVbLXT7WAkw2TS-gGFffJC5DIQ",
  authDomain: "ecommerce-coderhouse-ac4ed.firebaseapp.com",
  projectId: "ecommerce-coderhouse-ac4ed",
  storageBucket: "ecommerce-coderhouse-ac4ed.appspot.com",
  messagingSenderId: "832061315952",
  appId: "1:832061315952:web:fe5fce286d4e17c2b44db5",
  measurementId: "G-735Z5DK3DG"
};

/*const firebaseConfig = {
  apiKey: "AIzaSyDJXuQB70tWF-zS_sJh9_qF3mA466_vyFQ",
  authDomain: "storeog-coderhouse.firebaseapp.com",
  projectId: "storeog-coderhouse",
  storageBucket: "storeog-coderhouse.appspot.com",
  messagingSenderId: "378136336685",
  appId: "1:378136336685:web:b2040638898c53eaa5dba4",
  measurementId: "G-QJ0SKV1R1S"
};*/

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Initial />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
