import styles from 'styles/components/Checkbox.module.scss';

interface Props {
  completed?: boolean;
}

const Checkbox = ({ completed }: Props) => {
  return (
    <div className={styles.Check}>
      <span />
      <input type="checkbox" className={styles.Checkbox} checked={completed} />
    </div>
  );
};

export default Checkbox;
