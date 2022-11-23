import Logo from "../Logo/Logo";
import s from "./Footer.module.scss";
import { useEffect, useRef } from "react";
import { FooterRef } from "../../utils/types";

const Footer = () => {
  const footerDomRef = useRef<HTMLElement>(null);
  const footerPosRefs = useRef<FooterRef>({});

  const handleMatchesChange = () => setBottomProperty(footerPosRefs.current.matchMedia?.matches!);
  const setBottomProperty = (isSmall: boolean) => (footerDomRef.current!.style.bottom = isSmall ? "0" : "unset");

  /**
   * Set the bottom property of the footer depending on body and footer height
   * Also update matchMedia listener
   * @param {ResizeObserverEntry[]} e
   */
  const handleObserver = (e: ResizeObserverEntry[]) => {
    const { blockSize } = e[0].borderBoxSize[0];
    const { footerHeight } = footerPosRefs.current;

    setBottomProperty(footerHeight! + blockSize < window.innerHeight);
    footerPosRefs.current.matchMedia = window.matchMedia(`(min-height: ${footerHeight! + blockSize!}px)`);

    if (footerPosRefs.current.matchMedia) {
      footerPosRefs.current.matchMedia.removeEventListener("change", handleMatchesChange);
      footerPosRefs.current.matchMedia.addEventListener("change", handleMatchesChange);
    }
  };

  useEffect(() => {
    if (footerDomRef.current) footerPosRefs.current.footerHeight = footerDomRef.current?.offsetHeight;
    const observer = new ResizeObserver(handleObserver);
    observer.observe(document.body);
    return () => {
      observer.unobserve(document.body);
      footerPosRefs.current.matchMedia?.removeEventListener("change", handleMatchesChange);
    };
  }, []);

  return (
    <footer ref={footerDomRef}>
      <div className={s.logo}>
        <Logo width={122} height={39.5} />
      </div>
      <p className={s.copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
/** Created by carlos on 23/11/2022 */
