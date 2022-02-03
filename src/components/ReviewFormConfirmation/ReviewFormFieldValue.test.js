import * as React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';

import { ReviewFormFieldValue } from '.';

describe('ReviewFormFieldValue Component', () => {
  const value = 'Mark';
  const field = 'First Name';
  beforeEach(() => {
    render(<ReviewFormFieldValue fieldName={field} value={value} />);
  });

  it('should render the field and value', () => {
    screen.getByText((content, node) => {
      const hasText = node => [value, field].includes(node.textContent);
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        child => !hasText(child),
      );
      return nodeHasText && childrenDontHaveText;
    });
  });
});
