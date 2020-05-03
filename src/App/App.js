import React from "react";
import Menu from "../Components/Menu/Menu";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";

function App() {
  return (
    <BrowserRouter>
      <Menu>
        <Routes />
      </Menu>
    </BrowserRouter>
  );
}

export default App;
