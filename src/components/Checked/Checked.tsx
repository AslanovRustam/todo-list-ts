import type { FC } from "react";
import style from "./checked.module.css";

interface CheckedProps {
  checked: boolean;
}

const Checked: FC<CheckedProps> = ({ checked }) => {
  return (
    <p className={`${style.checkbox} ${checked && style.checked}`}>
      {checked ? "competed" : "not completed"}
    </p>
  );
};

export default Checked;
