import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Form } from './pages/form';
import { ThemeProvider } from 'styled-components';
import { colors } from './styles/themes/colors';
import { text } from './styles/themes/text';
import { Container } from './container/Container';

import * as S from './styles';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/add',
    element: <Form />
  }
]);
const themes = {
  ...colors,
  ...text
};

function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <S.GlobalStyle />
        <Container>
          <RouterProvider router={routes} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
