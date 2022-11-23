import React from "react";
import Router from "./Router/Router";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import "./styles/GlobalStyles.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
