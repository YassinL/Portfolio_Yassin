import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes";
import "./App.scss";
import BurgerMenu from "./components/organisms/BurgerMenu/BurgerMenu";

function App() {
  return (
    <Router>
      <BurgerMenu />
      <Routes />
    </Router>
  );
}

export default App;
