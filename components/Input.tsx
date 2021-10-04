import { TodoContext } from 'context/Todo';
import { useContext, useRef, useState } from 'react';
import styles from 'styles/components/Input.module.scss';
import Checkbox from './Checkbox';

const Input = () => {
  const { addTodo } = useContext(TodoContext);

  const inputRef = useRef<HTMLInputElement>();

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(inputRef.current.value);
  };

  return (
    <div className={styles.Todo}>
      <Checkbox />
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className={styles.Input}
          placeholder="Create a new todo"
          autoComplete="false"
          ref={inputRef}
          required
        />
      </form>
    </div>
  );
};

export default Input;
