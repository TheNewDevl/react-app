import Logo from "../Logo/Logo";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState, MouseEvent } from "react";

const setAriaSelected = (el: HTMLAnchorElement): void => {
  const selected = document.querySelector("[aria-selected]");
  if (selected) selected.removeAttribute("aria-selected");
  el && el.setAttribute("aria-selected", "true");
};

const Header = () => {
  const [logoSize, setLogoSize] = useState({ width: 145, height: 47 });
  const paths = { home: "/", about: "/about" };
  const navLinks = [
    { name: "Accueil", path: paths.home },
    { name: "A Propos", path: paths.about },
  ];
  const matchMedia = window.matchMedia("(min-width: 768px)");

  useEffect(() => {
    const handleResize = () => {
      matchMedia.matches ? setLogoSize({ width: 211, height: 60 }) : setLogoSize({ width: 145, height: 47 });
    };
    handleResize();
    matchMedia.addEventListener("change", handleResize);

    // Underline the current link depending on the url path
    const urlPath = window.location.pathname;
    const link = document.querySelector(`[href='${urlPath}']`);
    link && setAriaSelected(link as HTMLAnchorElement);

    return () => matchMedia.removeEventListener("change", handleResize);
  }, []);

  const handleUnderline = (e: MouseEvent<HTMLAnchorElement>) => {
    setAriaSelected(e.currentTarget);
  };

  return (
    <header>
      <div>
        <Logo width={logoSize.width} height={logoSize.height} />
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
