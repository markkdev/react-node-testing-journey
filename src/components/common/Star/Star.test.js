import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Star } from '.';

describe('Star Component', () => {
  it('displays a star icon', () => {
    render(<Star isEmpty={false} />);
    expect(screen.getByTitle('star-icon')).toBeInTheDocument();
  });

  it('displays a full star icon', () => {
    render(<Star isEmpty={false} />);
    expect(screen.getByTitle('star-icon')).toHaveClass('full');
  });

  it('displays an empty star icon', () => {
    render(<Star isEmpty />);
    expect(screen.getByTitle('star-icon')).toHaveClass('empty');
  });
});
