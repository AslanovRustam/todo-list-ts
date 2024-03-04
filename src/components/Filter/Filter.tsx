import { type FC, useState, MouseEvent } from "react";
import style from "./filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import { selectFilter } from "../../redux/selectors";
import { FilterVariants } from "../../interface/interface";

interface FilterProps {}

const Filter: FC<FilterProps> = () => {
  const [show, setShow] = useState(false);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const setilter = (e: MouseEvent<HTMLLIElement>) => {
    const name = e.currentTarget.dataset.name;
    dispatch(changeFilter(name));
  };
  return (
    <div className={style.container}>
      <p className={style.name} onClick={() => setShow(!show)}>
        Filter
      </p>
      <ul className={`${style.list} ${show && style.show}`}>
        <li
          className={`${style.item} ${
            filterValue === FilterVariants.all && style.active
          }`}
          data-name={FilterVariants.all}
          onClick={(e) => setilter(e)}
        >
          all
        </li>
        <li
          className={`${style.item} ${
            filterValue === FilterVariants.completed && style.active
          }`}
          data-name={FilterVariants.completed}
          onClick={(e) => setilter(e)}
        >
          completed
        </li>
        <li
          className={`${style.item} ${
            filterValue === FilterVariants.incompleted && style.active
          }`}
          data-name={FilterVariants.incompleted}
          onClick={(e) => setilter(e)}
        >
          not finished
        </li>
      </ul>
    </div>
  );
};

export default Filter;
