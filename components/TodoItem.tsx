import Checkbox from './Checkbox';

import styles from 'styles/components/TodoItem.module.scss';
import { useContext } from 'react';
import { TodoContext } from 'context/Todo';

interface Props {
  id: string;
  completed: boolean;
  children: string;
}

const TodoItem = ({ children, completed, id }: Props) => {
  const { setCompleted, removeTodo } = useContext(TodoContext);

  return (
    <div
      className={styles.TodoItem}
      onClick={() => {
        setCompleted(id);
      }}
    >
      <Checkbox id={id} completed={completed} />
      <p className={`${styles.Item} ${completed && styles.Checked}`}>
        {children}
      </p>
      <div
        onClick={(event) => {
          removeTodo(id);
          event.stopPropagation();
        }}
      >
        <img
          src="/images/icon-cross.svg"
          alt="remove todo"
          className={styles.Remove}
        />
      </div>
    </div>
  );
};

export default TodoItem;
