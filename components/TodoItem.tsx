import Checkbox from './Checkbox';

import styles from 'styles/components/TodoItem.module.scss';

interface Props {
  children: string;
}

const TodoItem = ({ children }: Props) => {
  return (
    <div className={styles.TodoItem}>
      <Checkbox />
      <p className={styles.Item}>{children}</p>
      <img
        src="/images/icon-cross.svg"
        alt="remove todo"
        className={styles.Remove}
      />
    </div>
  );
};

export default TodoItem;
