import React from "react";
import style from "./App.module.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Basics from "./pages/basics";

function App() {
  return (
    <BrowserRouter>
      <div className={style.AppContainer}>
        <Header />
        <div className={style.ContentContainer}>
          <Routes>
            <Route path={"/rogue-encampment"} element={<Home />} />
            <Route path={"/basics"} element={<Basics />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
