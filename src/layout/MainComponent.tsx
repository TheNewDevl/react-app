import { PropsWithChildren } from "react";
import s from "./MainComponent.module.scss";

interface MainComponentProps extends PropsWithChildren<{}> {}

const MainComponent = ({ children }: MainComponentProps) => {
  return <main className={s.MainComponent}>{children}</main>;
};

export default MainComponent;
/** Created by carlos on 24/11/2022 */
