import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home"

import style from "./App.module.scss";


function App() {
  return (
    <BrowserRouter>
      <div className={style.AppContainer}>
        <Header />
        <div className={style.ContentContainer}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            {/*<Route path={"/newprotocol"} element={<NewProtocol />} />*/}
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
