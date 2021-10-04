import styles from 'styles/components/Input.module.scss';
import Checkbox from './Checkbox';

const Input = () => {
  return (
    <div className={styles.Todo}>
      <Checkbox />
      <input
        type="text"
        className={styles.Input}
        placeholder="Create a new todo"
      />
    </div>
  );
};

export default Input;
