import Logo from "../../assets/Logo";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState, MouseEvent } from "react";

const Header = () => {
  const [logoSize, setLogoSize] = useState({ width: 145, height: 47 });

  useEffect(() => {
    const matchMedia = window.matchMedia("(min-width: 768px)");
    const handleResize = () => {
      matchMedia.matches ? setLogoSize({ width: 211, height: 60 }) : setLogoSize({ width: 145, height: 47 });
    };
    handleResize();
    matchMedia.addEventListener("change", handleResize);
    return () => matchMedia.removeEventListener("change", handleResize);
  }, []);

  const handleHighlight = (e: MouseEvent<HTMLAnchorElement>) => {
    const selected = document.querySelector("[aria-selected]");
    if (selected) selected.toggleAttribute("aria-selected");
    e.currentTarget.toggleAttribute("aria-selected");
  };

  return (
    <header>
      <div>
        <Logo width={logoSize.width} height={logoSize.height} />
      </div>
      <nav role="tablist">
        <Link role="tab" onClick={handleHighlight} className={s.link} to="/">
          Accueil
        </Link>
        <Link role="tab" onClick={handleHighlight} className={s.link} to="/about">
          A Propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
/** Created by carlos on 22/11/2022 */
