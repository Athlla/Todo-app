import styles from 'styles/components/TodoStatus.module.scss';

type activeType = 'All' | 'Active' | 'Completed';

interface Props {
  active: activeType;
  setActive: (type: activeType) => void;
}

const TodoStatus = ({ active, setActive }: Props) => {
  return (
    <div className={styles.Status}>
      <span
        className={active === 'All' && styles.Active}
        onClick={() => setActive('All')}
      >
        All
      </span>
      <span
        className={active === 'Active' && styles.Active}
        onClick={() => setActive('Active')}
      >
        Active
      </span>
      <span
        className={active === 'Completed' && styles.Active}
        onClick={() => setActive('Completed')}
      >
        Completed
      </span>
    </div>
  );
};

export default TodoStatus;
