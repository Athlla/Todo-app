import { useContext, useState } from 'react';

import { TodoContext } from 'context/Todo';

import styles from 'styles/components/Checkbox.module.scss';

interface Props {
  id?: string;
  completed?: boolean;
}

const Checkbox = ({ id, completed }: Props) => {
  const { setCompleted } = useContext(TodoContext);

  return (
    <div className={styles.Check}>
      <span />
      <input
        type="checkbox"
        className={styles.Checkbox}
        onChange={() => setCompleted(id)}
        checked={completed}
      />
    </div>
  );
};

export default Checkbox;
