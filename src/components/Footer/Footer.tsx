import Logo from "../../assets/Logo";
import s from "./Footer.module.scss";
import { useEffect, useRef } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  const handlePosition = () => {
    const isSmaller = document.body.clientHeight + footerRef.current!.clientHeight < window.innerHeight;
    footerRef.current!.style.bottom = isSmaller ? "0" : "unset";
  };

  useEffect(() => {
    //handle the footer position depending on match media, handle resize cases
    const matchMedia = window.matchMedia(
      `(min-height: ${document.body.clientHeight + footerRef.current!.clientHeight}px)`
    );
    matchMedia.addEventListener("change", handlePosition);

    //handle the footer position depending on body height when content change (ex: when a new apartment is added)
    const observer = new ResizeObserver(handlePosition);
    observer.observe(document.body);

    return () => {
      observer.unobserve(document.body);
      matchMedia.removeEventListener("change", handlePosition);
    };
  }, []);

  return (
    <footer ref={footerRef}>
      <div className={s.logo}>
        <Logo width={122} height={39.5} />
      </div>
      <p className={s.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
/** Created by carlos on 23/11/2022 */
