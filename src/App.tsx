import { useSelector } from "react-redux";
import { selectAllTodos } from "./redux/selectors";
import Form from "./components/Form/Form";
import Container from "./components/Container/Container";
import InfoContainer from "./components/InfoContainer/InfoContainer";
import Todolist from "./components/Todolist/Todolist";
import "./index.css";

function App() {
  const todos = useSelector(selectAllTodos);
  return (
    <>
      <Form />
      {todos.length ? (
        <Container>
          <InfoContainer />
          <Todolist />
        </Container>
      ) : (
        <p className="centerd">Go ahead, add your first todo!</p>
      )}
    </>
  );
}

export default App;
