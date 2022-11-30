import Logo from "../Logo/Logo";
import s from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { appRoutes } from "../../Router/Router";

const handleAriaSelected = (target: HTMLAnchorElement): void => {
  const prevSelected = document.querySelector("nav [aria-selected]");
  prevSelected && prevSelected.removeAttribute("aria-selected");
  target?.setAttribute("aria-selected", "true");
};

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    // Underline the current link depending on the url path
    const urlPath = window.location.pathname;
    const link = document.querySelector(`nav [href='${urlPath}']`);
    handleAriaSelected(link as HTMLAnchorElement);
  }, [location]);

  return (
    <header className={"invisible"}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav role="tablist">
        {appRoutes.map(
          ({ path, navLinkName }) =>
            navLinkName && (
              <Link key={path} to={path} className={s.link} role="tab">
                {navLinkName}
              </Link>
            )
        )}
      </nav>
    </header>
  );
};

export default Header;
/** Created by carlos on 22/11/2022 */
