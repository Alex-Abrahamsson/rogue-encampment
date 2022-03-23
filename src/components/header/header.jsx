import React, { useState } from "react";
import style from './header.module.scss';

function Header() {
  return (
    <header className={style.HeaderContainer}>
      <div className={style.ContentContainer}>
          <h2>Rogue Encampment</h2>
      </div>

    </header>
  );
}

export default Header;
