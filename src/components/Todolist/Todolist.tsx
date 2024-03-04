import type { FC } from "react";
import { useSelector } from "react-redux";
import { selectFilteredTodos } from "../../redux/selectors";
import TodoItem from "../TodoItem/TodoItem";
import style from "./todolist.module.css";

interface TodolistProps {}

const Todolist: FC<TodolistProps> = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <ul className={style.list}>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default Todolist;
