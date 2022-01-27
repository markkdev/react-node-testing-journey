import { render, queries } from '@testing-library/react';

const renderWithStore = (ui, options) => render(ui, { ...options });

export * from '@testing-library/react';

export { renderWithStore as render };
