import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// React is all about components
//1--- sir dimag ke liye --custom creation of html is
//2--react react me sirf end state btane ki need hai in
//3-- react is a single page application
//pakagejson ase file hai jisme dependencies,versions and scripts hoti hai
//whenever are page is loading (html file) then index.js is tha first file which will be executed

// App is the first component in react
// 


reportWebVitals();
