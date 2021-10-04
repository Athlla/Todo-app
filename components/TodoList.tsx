import TodoItem from './TodoItem';
import data from 'todolist.json';
import styles from 'styles/components/TodoList.module.scss';

const TodoList = () => {
  return (
    <div className={styles.TodoList}>
      {data.map((item) => (
        <TodoItem key={item.id}>{item.todo}</TodoItem>
      ))}
      <div className={styles.Utilities}>
        <p>5 items left</p>
        <div className={styles.Status}>
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <div className={styles.Clear}>Clear Completed</div>
      </div>
    </div>
  );
};

export default TodoList;
