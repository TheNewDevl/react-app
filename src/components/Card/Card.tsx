import s from "./Card.module.scss";
import { ApartmentType } from "../../utils/types";
import { Link } from "react-router-dom";

type CardProps = {
  title: ApartmentType["title"];
  cover: ApartmentType["cover"];
  id: string;
  onLoaded?: () => void;
};

const Card = ({
  onLoaded,
  id,
  title = "title",
  cover = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
}: CardProps) => {
  const href = `/lodging/${id}`;

  return (
    <article className={s.card}>
      <img onLoad={onLoaded} src={cover} alt={`${title} illustration`} />
      <Link to={href}>
        <h2 className={s.card__title}>{title}</h2>
        <span aria-hidden="true" className={s.link__mask}></span>
      </Link>
    </article>
  );
};

export default Card;

/** Created by carlos on 24/11/2022 */
