import { createContext, ReactNode, useContext, useState } from 'react';
import { nanoid } from 'nanoid';

import data from 'todolist.json';

type todo = {
  id: string;
  todo: string;
  completed: boolean;
};

interface contextType {
  todo: todo[];
  addTodo: (task: string) => void;
  removeTodo: (id: string) => void;
  removeCompleted: () => void;
  setCompleted: (id: string) => void;
}

const initialState: contextType = {
  todo: data,
  addTodo: () => {},
  removeTodo: () => {},
  removeCompleted: () => {},
  setCompleted: () => {},
};

export const TodoContext = createContext<contextType>(initialState);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todo, setTodo] = useState(data);

  const addTodo = (task: string) => {
    const newTodo = [...todo];
    newTodo.push({
      id: nanoid(),
      todo: task,
      completed: false,
    });

    setTodo(newTodo);
  };

  const removeTodo = (id: string) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  const removeCompleted = () => {
    const newTodo = todo.filter((item) => item.completed !== true);
    setTodo(newTodo);
  };

  const setCompleted = (id: string) => {
    const newTodo = todo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTodo(newTodo);
  };

  const value: contextType = {
    todo,
    addTodo,
    removeTodo,
    removeCompleted,
    setCompleted,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
