import s from "./Card.module.scss";
import { ApartmentType } from "../../utils/types";
import { Link } from "react-router-dom";
import { CSSProperties } from "react";

type CardProps = {
  title: ApartmentType["title"];
  cover: ApartmentType["cover"];
  lodgingId: string;
  onLoaded?: () => void;
  style?: CSSProperties;
  id: number;
};

const Card = ({
  style,
  id,
  onLoaded,
  lodgingId,
  title = "title",
  cover = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
}: CardProps) => {
  const href = `/lodging/${lodgingId}`;

  return (
    <article style={{ ...style }} className={`${s.card} invisible invisible-${id}`}>
      <img onLoad={onLoaded} src={cover} alt={`${title} illustration`} />
      <Link to={href}>
        <h2 className={`${s.card__title} invisible-1`}>{title}</h2>
        <span aria-hidden="true" className={s.link__mask}></span>
      </Link>
    </article>
  );
};

export default Card;

/** Created by carlos on 24/11/2022 */
