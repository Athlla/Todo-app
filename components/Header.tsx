import { useTheme } from 'next-themes';

import styles from 'styles/components/Header.module.scss';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>TODO</div>
      <div className={styles.Theme}>
        {theme === 'light' && (
          <img
            src="images/icon-moon.svg"
            className={styles.Toggle}
            alt="Theme-toggle"
            onClick={() => setTheme('dark')}
          />
        )}
        {theme === 'dark' && (
          <img
            src="images/icon-sun.svg"
            className={styles.Toggle}
            alt="Theme-toggle"
            onClick={() => setTheme('light')}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
