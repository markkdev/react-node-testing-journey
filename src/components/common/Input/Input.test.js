import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { Input } from '.';

describe('Input Component', () => {
  const onChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    render(
      <Input
        name="my-input"
        placeholder="This is an input placeholder"
        onChange={onChange}
      />,
    );
  });

  it('properly displays the input and placeholder', () => {
    expect(
      screen.getByRole('textbox', { name: 'my-input' }),
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('This is an input placeholder'),
    ).toBeInTheDocument();
  });

  it('fires a callback when a user types Hello World', () => {
    userEvent.type(
      screen.getByRole('textbox', { name: 'my-input' }),
      'Hello World',
    );

    expect(onChange).toHaveBeenCalledTimes('Hello World'.length);

    expect(screen.getByRole('textbox', { name: 'my-input' })).toHaveValue(
      'Hello World',
    );
  });
});
