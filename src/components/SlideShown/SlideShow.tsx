import s from "./SlideShow.module.scss";

import { useEffect, useState } from "react";

type SlideShowProps = { imagesList: string[] };

const SlideShow = ({ imagesList }: SlideShowProps) => {
  //will contain the gallery count
  const [count, setCount] = useState({
    current: 1,
    total: 0,
  });

  useEffect(() => {
    setCount({ ...count, total: imagesList.length });
  }, []);

  const handleNext = () => setCount({ ...count, current: count.current < count.total ? ++count.current : 1 });
  const handlePrevious = () => setCount({ ...count, current: count.current > 1 ? --count.current : count.total });

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
    <div className={s.slideShow}>
      <img className={s.slideShow__img} src={imagesList[count.current - 1]} alt="Photos de l'appartement" />
      <PicturesControls />
    </div>
  );
};

export default SlideShow;
/** Created by carlos on 25/11/2022 */
