import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/home-banner.png";
import { useFetch } from "../../hooks/useFetch";
import s from "./Home.module.scss";
import Card from "../../components/Card/Card";
import { ApartmentType } from "../../utils/types";
import MainComponent from "../../layout/MainComponent";

type HomeProps = {};

const Home = ({}: HomeProps) => {
  const URL = "/logements.json";
  const { data, isLoading, error } = useFetch(URL, undefined);

  useEffect(() => {
    document.title = "Accueil";
  }, []);

  const text: JSX.Element = (
    <h1>
      Chez vous, <br /> partout et ailleurs
    </h1>
  );

  return (
    <MainComponent>
      <Banner imgSrc={homeBanner} text={text} />
      <section className={s.cards__container}>
        {isLoading && <p>Chargement...</p>}
        {error && <p>{error}</p>}
        {data && data.map((ap: ApartmentType) => <Card key={ap.id} title={ap.title} cover={ap.cover} id={ap.id} />)}
      </section>
    </MainComponent>
  );
};

export default Home;
/** Created by carlos on 22/11/2022 */
