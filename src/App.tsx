import React from "react";
import Router from "./Router/Router";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import "./styles/GlobalStyles.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
