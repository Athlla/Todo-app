import TodoProvider from 'context/Todo';

import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />;
    </TodoProvider>
  );
}

export default MyApp;
