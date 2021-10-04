import styles from 'styles/components/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>TODO</div>
      <div className={styles.Theme}>
        <img
          src="images/icon-moon.svg"
          className={styles.Toggle}
          alt="Theme-toggle"
        />
      </div>
    </header>
  );
};

export default Header;
