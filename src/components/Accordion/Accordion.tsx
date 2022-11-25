import { KeyboardEvent, useEffect, useRef, useState } from "react";
import s from "./Accordion.module.scss";
import { handleArrowClassName, handleContentClassName } from "../../utils/cssClassesFns";
import chevron from "../../assets/chevron.svg";

type CollapseProps = {
  opened?: boolean;
  content: { title: string; text?: string; list?: string[] };
  isApartmentPage?: boolean;
  id: number;
};

const Accordion = ({ content, opened, isApartmentPage, id }: CollapseProps) => {
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

  const handleCollapse = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.code === "Space") {
      e.preventDefault();
      setOpen(!open);
    }
  };

  return (
    <div ref={accordionRef} className={s.accordion}>
      <div
        tabIndex={0}
        aria-controls={`accordion-content-${id}`}
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen(!open)}
        onKeyDown={handleCollapse}
        className={`${s.accordion__header}`}
      >
        <h2 id={`accordion-header-${id}`} className={s.accordion__header_title}>
          {title}
        </h2>
        <div className={handleArrowClassName(s, open)}>
          <img className={s.arrow} src={chevron} alt="Deployer le volet" />
        </div>
      </div>
      <div
        aria-hidden={open ? "false" : "true"}
        id={`accordion-content-${id}`}
        aria-labelledby={`accordion-header-${id}`}
        ref={textContainerRef}
        className={open ? `${s.accordion__content} ${s.open}` : `${s.accordion__content}`}
      >
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
