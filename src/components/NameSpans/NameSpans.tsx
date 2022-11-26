import s from "./NameSpans.module.scss";

type NameSpansProps = { name: string };

const NameSpans = ({ name }: NameSpansProps) => {
  return <p className={s.name}>{name && name.split(" ").map((word, i) => <span key={i}>{word}</span>)}</p>;
};

export default NameSpans;
/** Created by carlos on 26/11/2022 */
