import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from "./components/partials/Header";
import Home from "./components/home/Home";
import SideNav from "./components/partials/SideNav";
import Footer from "./components/partials/Footer";

import Add from "./components/stock/Add";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function AddStock() {
  return (
    <div className="wrapper">
        <Header />
        <Add />
        <SideNav />
        <Footer />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/Add-Stock' element={<AddStock />} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
