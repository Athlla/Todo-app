import Header from 'components/Header';
import Input from 'components/Input';
import TodoList from 'components/TodoList';
import styles from 'styles/pages/Home.module.scss';

const Home = () => {
  return (
    <main className={styles.Container}>
      <Header />
      <Input />
      <TodoList />
    </main>
  );
};

export default Home;
