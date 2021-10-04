import { useContext, useState } from 'react';

import { TodoContext } from 'context/Todo';
import TodoStatus from './TodoStatus';
import TodoItem from './TodoItem';
import Card from './Card';

import styles from 'styles/components/TodoList.module.scss';

const TodoList = () => {
  const [active, setActive] = useState<'All' | 'Active' | 'Completed'>('All');

  const { todo, removeCompleted } = useContext(TodoContext);

  const filteredTodo =
    active === 'Active'
      ? todo.filter((item) => item.completed === false)
      : active === 'Completed'
      ? todo.filter((item) => item.completed === true)
      : todo;

  return (
    <>
      <div className={styles.TodoList}>
        {filteredTodo.map((item) => (
          <TodoItem key={item.id} {...item}>
            {item.todo}
          </TodoItem>
        ))}
        <div className={styles.Utilities}>
          <p>
            {filteredTodo.length}
            {filteredTodo.length === 1 || filteredTodo.length === 0
              ? ' item'
              : ' items'}{' '}
            left
          </p>
          <TodoStatus active={active} setActive={setActive} />
          <div className={styles.Clear} onClick={removeCompleted}>
            Clear Completed
          </div>
        </div>
      </div>
      <Card mobileOnly>
        <TodoStatus active={active} setActive={setActive} />
      </Card>
    </>
  );
};

export default TodoList;
