import { useEffect, useRef, useState } from "react";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/home-banner.png";
import { useFetch } from "../../hooks/useFetch";
import s from "./Home.module.scss";
import Card from "../../components/Card/Card";
import { ApartmentType } from "../../utils/types";
import MainComponent from "../../layout/MainComponent";
import Loader from "../../components/Loader/Loader";

type HomeProps = {};

const Home = ({}: HomeProps) => {
  const URL = "/logements.json";
  const { data, isLoading, error } = useFetch(URL, undefined);
  const [isLoadingImages, setIsLoadingImages] = useState<boolean>(true);
  const loadedImages = useRef(0);

  useEffect(() => {
    document.title = "Accueil";
    //remove loader in any case after 1000ms
    setInterval(() => setIsLoadingImages(false), 1000);
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
      <section className={s.cards__container}>
        {(isLoading || isLoadingImages) && <Loader fullScreen />}
        {error && <p>{error}</p>}
        {data &&
          data.map((ap: ApartmentType) => (
            <Card onLoaded={onLoaded} key={ap.id} title={ap.title} cover={ap.cover} id={ap.id} />
          ))}
      </section>
    </MainComponent>
  );
};

export default Home;
/** Created by carlos on 22/11/2022 */
