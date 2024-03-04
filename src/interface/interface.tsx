export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface ITodosState {
  items: ITodo[];
}

export interface IState {
  todos: { items: ITodo[] };
  filter: string;
}

export enum FilterVariants {
  all = "all",
  completed = "completed",
  incompleted = "incompleted",
}
