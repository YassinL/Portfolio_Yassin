import React from "react";
import ReactDOM from "react-dom";

import "./BurgerMenu.scss";
import SideBar from "../SideBar/SideBar";

export default function BurgerMenu() {
  return (
    <div id="BurgerMenu">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
    </div>
  );
}
