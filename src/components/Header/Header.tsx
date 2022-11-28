import Logo from "../Logo/Logo";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useEffect, MouseEvent } from "react";

export const removeAriaSelected = (): void => {
  const selected = document.querySelector("[aria-selected]");
  selected && selected.removeAttribute("aria-selected");
};

const setAriaSelected = (el: HTMLAnchorElement): void => {
  removeAriaSelected();
  el && el.setAttribute("aria-selected", "true");
};

const Header = () => {
  const paths = { home: "/", about: "/about" };
  const navLinks = [
    { name: "Accueil", path: paths.home },
    { name: "A Propos", path: paths.about },
  ];

  useEffect(() => {
    // Underline the current link depending on the url path
    const urlPath = window.location.pathname;
    const link = document.querySelector(`[href='${urlPath}']`);
    link && setAriaSelected(link as HTMLAnchorElement);
  }, []);

  const handleUnderline = (e: MouseEvent<HTMLAnchorElement>) => {
    setAriaSelected(e.currentTarget);
  };

  return (
    <header className={"invisible"}>
      <div>
        <Logo />
      </div>
      <nav role="tablist">
        {navLinks.map(({ name, path }) => (
          <Link key={name} to={path} role="tab" className={s.link} onClick={handleUnderline}>
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
/** Created by carlos on 22/11/2022 */
