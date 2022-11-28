import { useEffect, useRef, useState } from "react";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/home-banner.png";
import { useFetch } from "../../hooks/useFetch";
import s from "./Home.module.scss";
import Card from "../../components/Card/Card";
import { ApartmentType } from "../../utils/types";
import MainComponent from "../../layout/MainComponent";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const URL = "/logements.json";
  const { data, isLoading, error } = useFetch(URL, undefined);
  const [isLoadingImages, setIsLoadingImages] = useState<boolean>(true);
  const loadedImages = useRef(0);

  useEffect(() => {
    document.title = "Accueil";
    //remove loader in any case after 1000ms
    setInterval(() => setIsLoadingImages(false), 3000);
  }, []);

  const onLoaded = () => {
    loadedImages.current++;
    if (loadedImages.current === data?.length) setIsLoadingImages(false);
  };

  const text: JSX.Element = (
    <h1>
      Chez vous, <br /> partout et ailleurs
    </h1>
  );

  return (
    <MainComponent>
      <Banner imgSrc={homeBanner} text={text} />
      <section className={`${s.cards__container}`}>
        {(isLoading || isLoadingImages) && <Loader color={"rgb(255, 96,96)"} />}
        {error && <p>{error}</p>}
        {data?.map((ap: ApartmentType, index) => (
          <Card
            style={{ display: isLoading || isLoadingImages ? "none" : "block" }}
            key={ap.id}
            onLoaded={onLoaded}
            lodgingId={ap.id}
            id={index}
            title={ap.title}
            cover={ap.cover}
          />
        ))}
      </section>
    </MainComponent>
  );
};

export default Home;
/** Created by carlos on 22/11/2022 */
