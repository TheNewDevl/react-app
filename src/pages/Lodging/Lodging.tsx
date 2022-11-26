import s from "./Lodging.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import MainComponent from "../../layout/MainComponent";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
import Ratings from "../../components/Ratings/Ratings";
import SlideShow from "../../components/SlideShown/SlideShow";
import Tags from "../../components/Tags/Tags";
import Accordion from "../../components/Accordion/Accordion";
import NameSpans from "../../components/NameSpans/NameSpans";

type LodgingProps = {};

const Lodging = ({}: LodgingProps) => {
  const URL = "/logements.json";
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(URL, id);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = data ? data.title : "Chargement...";
  }, [data]);

  const accordionData = [
    { title: "Description", text: data?.description },
    { title: "Équipements", list: data?.equipments },
  ];

  if (error) navigate("/error", { replace: true });

  return (
    <MainComponent>
      {data && (
        <>
          <SlideShow imagesList={data.pictures} />
          <div className={s.top__wrapper}>
            <div className={s.title__wrapper}>
              <h1 className={s.lodging__title}>{data.title}</h1>
              <p className={s.lodging__location}>{data.location}</p>
              <Tags tagsList={data.tags} />
            </div>

            <div className={s.host__wrapper}>
              <Ratings rating={+data.rating} totalAvailableStars={5} />
              <div className={s.lodging__host__container}>
                <NameSpans name={data.host.name} />
                <img src={data.host.picture} alt="host picture" />
              </div>
            </div>
          </div>
          <div className={`${s.accordion__container}`}>
            {accordionData.map(({ title, text, list }, i) => (
              <Accordion key={i} id={i} opened isApartmentPage content={{ title, text, list }} />
            ))}
          </div>
        </>
      )}
    </MainComponent>
  );
};

export default Lodging; /*
/** Created by carlos on 22/11/2022 */
