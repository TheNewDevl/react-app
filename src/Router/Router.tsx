import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Error from "../pages/error/Error";
import Lodging from "../pages/Lodging/Lodging";
import { RouteInterface } from "../utils/types";

export const appRoutes: RouteInterface[] = [
  { path: "/about", component: About, navLinkName: "A propos" },
  { path: "/lodging/:id", component: Lodging },
  { path: "/", component: Home, navLinkName: "Accueil" },
  { path: "*", component: Error },
];

const Router = () => {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};

export default Router;
/** Created by carlos on 22/11/2022 */
