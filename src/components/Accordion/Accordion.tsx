import { MouseEvent, useEffect, useRef, useState } from "react";
import s from "./Accordion.module.scss";
import { handleArrowClassName, handleContentClassName } from "../../utils/cssClassesFns";
import chevron from "../../assets/chevron.svg";

type CollapseProps = {
  opened?: boolean;
  content: { title: string; text?: string; list?: string[] };
  isApartmentPage?: boolean;
};

const Accordion = ({ content, opened, isApartmentPage }: CollapseProps) => {
  const [open, setOpen] = useState(!!opened);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const textDomRef = useRef<HTMLDivElement>(null);
  const { text, list, title } = content;

  useEffect(() => {
    HandleTextContainerMaxHeight();
  }, [open]);

  const HandleTextContainerMaxHeight = () => {
    if (textContainerRef.current && textDomRef.current) {
      const textDomHeight = textDomRef.current.clientHeight;
      textContainerRef.current.style.maxHeight = open ? `${textDomHeight + 15}px` : "0px";
    }
  };

  const handleCollapse = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div ref={accordionRef} className={s.accordion}>
      <div onClick={handleCollapse} className={`${s.accordion__header}`}>
        <h2 className={s.accordion__header_title}>{title}</h2>
        <div className={handleArrowClassName(s, open)}>
          <img className={s.arrow} src={chevron} alt="Deployer le volet" />
        </div>
      </div>
      <div ref={textContainerRef} className={open ? `${s.accordion__content} ${s.open}` : `${s.accordion__content}`}>
        {text && (
          <p ref={textDomRef} className={handleContentClassName(s, open, isApartmentPage)}>
            {text}
          </p>
        )}
        {list && (
          <ol className={handleContentClassName(s, open, isApartmentPage)}>
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default Accordion;
/** Created by carlos on 24/11/2022 */
