import * as React from 'react';

import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('Button Component', () => {
  const onClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    render(
      <Button name={'my-button'} onClick={onClick}>
        My Button
      </Button>,
    );
  });

  it('properly displays the button content', () => {
    expect(
      screen.getByRole('button', { name: 'my-button' }),
    ).toBeInTheDocument();

    expect(screen.getByText('My Button')).toBeInTheDocument();
  });

  it('fires a callback when a button is clicked', () => {
    userEvent.click(screen.getByRole('button', { name: 'my-button' }));

    expect(onClick).toHaveBeenCalled();
  });
});
