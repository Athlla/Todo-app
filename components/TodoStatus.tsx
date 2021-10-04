import styles from 'styles/components/TodoStatus.module.scss';

const TodoStatus = () => {
  return (
    <div className={styles.Status}>
      <span>All</span>
      <span>Active</span>
      <span>Completed</span>
    </div>
  );
};

export default TodoStatus;
