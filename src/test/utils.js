import { render, queries } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from '../slices/reducers';

const renderWithStore = (
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: reducers, preloadedState }),
    ...renderOptions
  } = {},
) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { renderWithStore };
