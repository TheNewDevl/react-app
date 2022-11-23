import s from "./Banner.module.scss";
import { useEffect, useRef } from "react";
import { handleBannerClass } from "../../utils/cssClassesFns";

type HomeBannerProps = {
  imgSrc: string;
  isFixedHeight?: boolean;
  text?: JSX.Element;
};

const Banner = ({ isFixedHeight, text, imgSrc }: HomeBannerProps) => {
  const bannerRef = useRef<null | HTMLDivElement>(null);

  /** Set img background */
  useEffect(() => {
    bannerRef.current?.style.setProperty("background-image", `url(${imgSrc})`);
  }, []);

  return (
    <div ref={bannerRef} className={handleBannerClass(isFixedHeight, s)}>
      {text && text}
    </div>
  );
};

export default Banner;
/** Created by carlos on 23/11/2022 */
