import { useContext } from 'react';

import { TodoContext } from 'context/Todo';
import styles from 'styles/components/Checkbox.module.scss';

interface Props {
  id?: string;
  completed?: boolean;
}

const Checkbox = ({ completed, id }: Props) => {
  const { setCompleted } = useContext(TodoContext);

  return (
    <div className={styles.Check}>
      <span />
      <input
        type="checkbox"
        className={styles.Checkbox}
        checked={completed}
        onChange={() => setCompleted(id)}
      />
    </div>
  );
};

export default Checkbox;
