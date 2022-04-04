import React, { useState } from "react";
import style from "./header.module.scss";
import SlidingMenu from "../slidingMenu";

function Header() {
  const [open, setOpen] = useState(true);

  const onChange = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <header className={style.HeaderContainer}>
      <div className={style.ContentContainer}>
        <SlidingMenu isOpen={open} onChange={onChange} />
      </div>
    </header>
  );
}

export default Header;
