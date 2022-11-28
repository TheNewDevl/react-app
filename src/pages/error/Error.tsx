import s from "./Error.module.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { removeAriaSelected } from "../../components/Header/Header";

const Error = () => {
  useEffect(() => {
    document.title = "Page introuvable";
    removeAriaSelected();
  }, []);

  return (
    <main className={s.error}>
      <section>
        <h1 className={s.error__title}>404</h1>
        <p className={s.error__text}>
          Oups! La page que <span>vous demandez n'existe pas.</span>
        </p>
      </section>

      <Link className={s.error__link} to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
};

export default Error;
/** Created by carlos on 22/11/2022 */
