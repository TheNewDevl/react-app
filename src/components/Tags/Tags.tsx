import s from "./Tags.module.scss";

type TagsProps = { tagsList: string[] };

const Tags = ({ tagsList }: TagsProps) => {
  const Tag = ({ text }: { text: string }) => <span className={s.tag}>{text}</span>;

  return (
    <div className={`${s.tags__container} invisible-1`}>
      {tagsList.map((tag, index) => (
        <Tag text={tag} key={index} />
      ))}
    </div>
  );
};

export default Tags;
/** Created by carlos on 25/11/2022 */
