import React from "react";
import Router from "./Router/Router";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import useReveal from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
