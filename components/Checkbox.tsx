import styles from 'styles/components/Checkbox.module.scss';

const Checkbox = () => {
  return (
    <div className={styles.Check}>
      <input type="checkbox" className={styles.Checkbox} />
    </div>
  );
};

export default Checkbox;
