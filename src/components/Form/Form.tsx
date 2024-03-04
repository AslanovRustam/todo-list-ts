import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import { nanoid } from "nanoid";
import style from "./form.module.css";

const Form = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const todo = {
      id: nanoid(),
      text: query,
      completed: false,
    };

    dispatch(addTodo(todo));

    setQuery("");
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        onChange={handleInput}
        placeholder="Add at least 1 symbol"
        name="search"
        required
        value={query}
        autoFocus
      />
      <button className={style.button} type="submit" disabled={!query}>
        Add todo
      </button>
    </form>
  );
};

export default Form;
