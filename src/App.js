import React from "react";
import style from "./App.module.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Basics from "./pages/basics";
import Classes from "./pages/classes";
import Skills from "./pages/skills";

function App() {
  return (
    <BrowserRouter>
      <div className={style.AppContainer}>
        <Header />
        <div className={style.ContentContainer}>
          <Routes>
            <Route path={"/rogue-encampment"} element={<Home />} />
            <Route path={"/basics"} element={<Basics />} />
            <Route path={"/classes"} element={<Classes />} />
            <Route path={"/skills"} element={<Skills />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
