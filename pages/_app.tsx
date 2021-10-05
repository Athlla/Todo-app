import { ThemeProvider } from 'next-themes';

import TodoProvider from 'context/Todo';

import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light">
      <TodoProvider>
        <Component {...pageProps} />;
      </TodoProvider>
    </ThemeProvider>
  );
}

export default MyApp;
