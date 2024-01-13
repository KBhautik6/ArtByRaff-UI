import React from "react";
import { Header } from "../src/components/Header/Header";
import { GlobalStyles } from "../src/components/GlobalStyle.styled";
import { Slider } from "../src/components/Slider/Slider";
import "../src/App.css";
import { Route, Routes } from "react-router";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { FullNavbar } from "./components/FullNavbar/FullNavbar";
const App = () => {
  return (
    <>
      <div className="App">
        <GlobalStyles />
        <Slider />
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="about" element={<AboutMe />}></Route>
          <Route path="fullnavbar" element={<FullNavbar />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
