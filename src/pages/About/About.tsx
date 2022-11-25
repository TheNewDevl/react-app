import Banner from "../../components/Banner/Banner";
import aboutBanner from "../../assets/about-banner.png";
import { useEffect } from "react";
import s from "./About.module.scss";
import MainComponent from "../../layout/MainComponent";
import Accordion from "../../components/Accordion/Accordion";

const AccordionList = [
  {
    title: "Fiabilité",
    text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "A Propos";
  }, []);

  return (
    <MainComponent>
      <Banner isFixedHeight imgSrc={aboutBanner} />
      <div className={s.accordion__container}>
        {AccordionList.map((item, i) => (
          <Accordion opened={i % 2 !== 0} key={i} content={item} id={i} />
        ))}
      </div>
    </MainComponent>
  );
};

export default About;
/** Created by carlos on 22/11/2022 */
