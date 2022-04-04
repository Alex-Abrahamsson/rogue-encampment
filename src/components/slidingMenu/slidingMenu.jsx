import React, { useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import style from "./slidingMenu.module.scss";
import Navbar from "./navBar/navBar";
import { OnClickOutside } from "../../hooks/onClickOutside";

const SlidingMenu = (props) => {
  const { isOpen, onChange } = props;
  const node = useRef();

  const onClickHandler = () => {
    onChange(!isOpen);
  };

  OnClickOutside(node, () => onChange(true));

  return (
    <div className={style.ContentContainer} ref={node}>
      {/* Hamburger icon */}
      <div
        role={"hamburger"}
        onClick={onClickHandler}
        className={cx(style.Slider, { [style.active]: !isOpen })}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* sliding menu */}
      <div
        role={"menu"}
        className={cx(style.menu, { [style.active]: !isOpen })}
        onClick={onClickHandler}
      >
        <Navbar />
      </div>
    </div>
  );
};

SlidingMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,

  onChange: PropTypes.func.isRequired,
};

SlidingMenu.defaultProps = {
  isOpen: false,
};

export default SlidingMenu;
