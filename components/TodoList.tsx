import { useContext } from 'react';

import { TodoContext } from 'context/Todo';
import TodoStatus from './TodoStatus';
import TodoItem from './TodoItem';
import Card from './Card';

import styles from 'styles/components/TodoList.module.scss';

const TodoList = () => {
  const { todo, removeCompleted } = useContext(TodoContext);

  return (
    <>
      <div className={styles.TodoList}>
        {todo.map((item) => (
          <TodoItem key={item.id} {...item}>
            {item.todo}
          </TodoItem>
        ))}
        <div className={styles.Utilities}>
          <p>
            {todo.length}
            {todo.length === 1 || todo.length === 0 ? ' item' : ' items'} left
          </p>
          <TodoStatus />
          <div className={styles.Clear} onClick={removeCompleted}>
            Clear Completed
          </div>
        </div>
      </div>
      <Card mobileOnly>
        <TodoStatus />
      </Card>
    </>
  );
};

export default TodoList;
