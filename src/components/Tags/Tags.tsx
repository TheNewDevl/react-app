import s from "./Tags.module.scss";

type TagsProps = { tagsList: string[] };

const Tags = ({ tagsList }: TagsProps) => {
  return (
    <div className={`${s.tags__container} invisible-1`}>
      {tagsList.map((tag, index) => (
        <span key={index} className={s.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
/** Created by carlos on 25/11/2022 */
