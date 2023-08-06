import logo from './logo.svg';
import Header from "./components/partials/Header";
import Home from "./components/home/Home";
import SideNav from "./components/partials/SideNav";
import Footer from "./components/partials/Footer";

import Add from "./components/stock/Add";
//import { ReactDOM } from 'react';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
//import Switch from './components/Switch';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";



function App() {
  return (
    <div className="wrapper">
        <Header />
        <Home />
        <SideNav />
        <Footer />
    </div>
  );
}




const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    {/* <Route path='/Add-Stock' element={<AddStock />} /> */}
  </Routes>
  </BrowserRouter>
);

export default App;
