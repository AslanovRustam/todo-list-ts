import type { FC } from "react";
import style from "./infocontainer.module.css";
import Statistics from "../Statistics/Statistics";
import Filter from "../Filter/Filter";

interface InfoContainerProps {}

const InfoContainer: FC<InfoContainerProps> = () => {
  return (
    <div className={style.container}>
      <Statistics />
      <Filter />
    </div>
  );
};

export default InfoContainer;
