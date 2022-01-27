import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Stars } from '.';

describe('Stars Component', () => {
  const onClick = jest.fn();
  const props = {
    rating: 3,
    onClick: onClick,
    error: '',
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays 5 star icons that are buttons', () => {
    render(<Stars {...props} />);
    expect(screen.getAllByTitle('star-icon')).toHaveLength(5);
    expect(screen.getAllByRole('button')).toHaveLength(5);
  });

  it('displays 3 full stars and 2 empty ones', () => {
    render(<Stars {...props} />);
    let emptyStars = 0;
    const zero = screen.getAllByTitle('star-icon').reduce((acc, star) => {
      if (star.getAttribute('class') === 'full') return acc - 1;
      emptyStars += 1;
      return acc;
    }, props.rating);
    expect(zero).toEqual(0);
    expect(emptyStars).toEqual(2);
  });

  it('displays 4 full stars and 1 empty one when hovering on the 4th star', () => {
    render(<Stars {...props} />);
    let emptyStars = 0;

    userEvent.hover(screen.getByRole('button', { name: 'select-rating-4' }));

    screen.getAllByTitle('star-icon').forEach(star => {
      if (star.getAttribute('class') === 'full') return;
      emptyStars += 1;
    });

    expect(emptyStars).toEqual(1);
  });

  it('fires a click event with the number 4 when the 4th star is clicked', () => {
    render(<Stars {...props} />);
    const star = screen.getByRole('button', { name: 'select-rating-4' });
    userEvent.click(star);
    expect(onClick).toHaveBeenCalledWith(4);
  });
});
