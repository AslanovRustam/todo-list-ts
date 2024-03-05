import { type FC, useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import { selectFilter } from "../../redux/selectors";
import { FilterVariants } from "../../interface/interface";
import style from "./filter.module.css";

interface FilterProps {}

const Filter: FC<FilterProps> = () => {
  const [show, setShow] = useState(false);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const setFilter = (e: MouseEvent<HTMLLIElement>) => {
    const name = e.currentTarget.dataset.name;
    dispatch(changeFilter(name));
  };

  const getItemClassName = (filterVariant: string) =>
    `${style.item} ${filterValue === filterVariant ? style.active : ""}`;

  return (
    <div className={style.container}>
      <p className={style.name} onClick={() => setShow(!show)}>
        Filter
      </p>
      <ul className={`${style.list} ${show && style.show}`}>
        {Object.values(FilterVariants).map((variant) => (
          <li
            key={variant}
            className={getItemClassName(variant)}
            data-name={variant}
            onClick={setFilter}
          >
            {variant}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
