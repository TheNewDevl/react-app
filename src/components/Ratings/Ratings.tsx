import s from "./Ratings.module.scss";

type RatingsProps = {
  rating: number;
  totalAvailableStars: number;
};

const Ratings = ({ rating, totalAvailableStars }: RatingsProps) => {
  const totalAvailableStartsArray = Array.from({ length: totalAvailableStars }, () => 0);

  return (
    <div className={s.ratings__container}>
      {totalAvailableStartsArray.map((n, i) => (
        <svg
          key={i}
          className={`${s.star} ${i < rating ? s.colored : ""}`}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" />
        </svg>
      ))}
    </div>
  );
};

export default Ratings;
/** Created by carlos on 25/11/2022 */
