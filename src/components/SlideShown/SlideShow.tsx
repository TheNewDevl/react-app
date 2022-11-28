import s from "./SlideShow.module.scss";

import { useEffect, useRef, useState } from "react";
import Loader from "../Loader/Loader";

type SlideShowProps = { imagesList: string[] };

const SlideShow = ({ imagesList }: SlideShowProps) => {
  //will contain the gallery count
  const [count, setCount] = useState({
    current: 1,
    total: 0,
  });
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCount({ ...count, total: imagesList.length });
    if (imageRef.current) imageRef.current.onload = () => setIsLoaded(true);
  }, []);

  const handleNext = () => {
    setCount({ ...count, current: count.current < count.total ? ++count.current : 1 });
    setIsLoaded(false);
  };
  const handlePrevious = () => {
    setCount({ ...count, current: count.current > 1 ? --count.current : count.total });
    setIsLoaded(false);
  };

  /** Will display controls only if there is more than one picture*/
  const PicturesControls = () => {
    if (count.total > 1) {
      return (
        <>
          <div className={s.slideShow__count}>
            <span>{count.current}</span>
            <span>/</span>
            <span>{count.total}</span>
          </div>
          <button onClick={handlePrevious} className={`${s.slideShow__btn} ${s.slideShow__btn_left}`}>
            Image précédente
          </button>
          <button onClick={handleNext} className={`${s.slideShow__btn} ${s.slideShow__btn_right}`}>
            Image suivante
          </button>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={`${s.slideShow} invisible`}>
      {!isLoaded && <Loader color={"rgb(255, 96,96)"} />}
      <img
        ref={imageRef}
        className={s.slideShow__img}
        src={imagesList[count.current - 1]}
        alt="Photos de l'appartement"
        style={{ display: isLoaded ? "block" : "none" }}
      />
      <PicturesControls />
    </div>
  );
};

export default SlideShow;
/** Created by carlos on 25/11/2022 */
