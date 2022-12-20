import React from "react";
import { Route, Routes } from "react-router";
import './App.scss'
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  );
};

export default App;
