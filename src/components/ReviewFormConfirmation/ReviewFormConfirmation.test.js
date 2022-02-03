import * as React from 'react';
import { screen, act, waitFor } from '@testing-library/react';
import { renderWithStore } from '../../test/utils';
import { ReviewFormConfirmation } from '.';

describe('ReviewForm Component', () => {
  const firstName = 'Mark';
  const title = 'My Title';
  const review = 'This is a review. It tells you about something.';
  const rating = 5;

  beforeEach(() => {
    renderWithStore(<ReviewFormConfirmation />, {
      preloadedState: {
        review: { firstName, title, review, rating, state: 'idle' },
      },
    });
  });

  it('should render all of the values from global state', () => {
    screen.getByText(firstName);
    screen.getByText(title);
    screen.getByText(review);
    screen.getByText(rating);
  });
});
