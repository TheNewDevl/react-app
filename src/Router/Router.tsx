import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Error from "../pages/error/Error";
import Lodging from "../pages/Lodging/Lodging";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lodging/:id" element={<Lodging />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
/** Created by carlos on 22/11/2022 */
