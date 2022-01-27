import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from '.';

describe('Text Component', () => {
  it('displays the text', () => {
    render(<Text variant="p">Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
