import s from "./Ratings.module.scss";

const Star = ({ color }: { color: string }) => (
  <svg
    className={s.star}
    width={"clamp(16px, 2.5vw, 30px)"}
    height={"clamp(16px, 2.5vw, 30px)"}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z"
      fill={color}
    />
  </svg>
);

type RatingsProps = {
  rating: number;
  totalAvailableStars: number;
};

const Ratings = ({ rating, totalAvailableStars }: RatingsProps) => {
  const coloredStars = Array.from({ length: rating }, () => 1);
  const greyStars = Array.from({ length: totalAvailableStars - rating }, () => 0);

  return (
    <div className={s.ratings__container}>
      {[...coloredStars, ...greyStars].map((n, i) => (
        <Star key={i} color={n === 1 ? "#FF6060" : "#E3E3E3"} />
      ))}
    </div>
  );
};

export default Ratings;
/** Created by carlos on 25/11/2022 */
