import * as React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReviewForm } from '.';
import { renderWithStore } from '../../test/utils';

describe('ReviewForm Component', () => {
  const firstname = 'Mark';
  const title = 'My Title';
  const review = 'This is a review.\nIt tells you about something.';
  const onCompleted = jest.fn();

  const getButton = name => screen.getByRole('button', { name });
  const getInput = name => screen.getByRole('textbox', { name });
  const getStarButton = num => getButton(`select-rating-${num}`);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays the form', () => {
    renderWithStore(<ReviewForm onCompleted={onCompleted} />);
    expect(
      screen.getByRole('form', { name: 'Add a review' }),
    ).toBeInTheDocument();
  });

  describe('Review Form Happy Path', () => {
    it('allows you to fill and submit the form', async () => {
      renderWithStore(<ReviewForm onCompleted={onCompleted} />);
      userEvent.type(getInput('firstname'), firstname);
      expect(getInput('firstname')).toHaveValue(firstname);
      userEvent.type(getInput('title'), title);
      expect(getInput('title')).toHaveValue(title);
      userEvent.type(getInput('review'), review);
      expect(getInput('review')).toHaveValue(review);
      const starIcons = screen.getAllByTitle('star-icon');
      expect(starIcons[4]).toHaveAttribute('class', 'full');
      userEvent.click(getButton('confirm-review'));
      await waitFor(() => {
        expect(onCompleted).toHaveBeenCalled();
      });
    });
  });

  describe('Review Form Missing Inputs', () => {
    it('fails if the firstname is missing', async () => {
      renderWithStore(<ReviewForm onCompleted={onCompleted} />);
      userEvent.type(getInput('title'), title);
      expect(getInput('title')).toHaveValue(title);
      userEvent.type(getInput('review'), review);
      expect(getInput('review')).toHaveValue(review);
      const starIcons = screen.getAllByTitle('star-icon');
      expect(starIcons[4]).toHaveAttribute('class', 'full');
      userEvent.click(getButton('confirm-review'));
      await waitFor(() => {
        expect(screen.getByText('Please provide your first name'));
        expect(onCompleted).not.toHaveBeenCalled();
      });
    });

    it('fails if the title is missing', async () => {
      renderWithStore(<ReviewForm onCompleted={onCompleted} />);
      userEvent.type(getInput('firstname'), firstname);
      expect(getInput('firstname')).toHaveValue(firstname);
      userEvent.type(getInput('review'), review);
      expect(getInput('review')).toHaveValue(review);
      const starIcons = screen.getAllByTitle('star-icon');
      expect(starIcons[4]).toHaveAttribute('class', 'full');
      userEvent.click(getButton('confirm-review'));
      await waitFor(() => {
        expect(screen.getByText('Please provide a title'));
        expect(onCompleted).not.toHaveBeenCalled();
      });
    });

    it('fails if the review is missing', async () => {
      renderWithStore(<ReviewForm onCompleted={onCompleted} />);
      userEvent.type(getInput('firstname'), firstname);
      expect(getInput('firstname')).toHaveValue(firstname);
      userEvent.type(getInput('title'), title);
      expect(getInput('title')).toHaveValue(title);
      const starIcons = screen.getAllByTitle('star-icon');
      expect(starIcons[4]).toHaveAttribute('class', 'full');
      userEvent.click(getButton('confirm-review'));
      await waitFor(() => {
        expect(screen.getByText('Please provide your review'));
        expect(onCompleted).not.toHaveBeenCalled();
      });
    });

    it('fails if nothing is entered', async () => {
      renderWithStore(<ReviewForm onCompleted={onCompleted} />);
      userEvent.click(getButton('confirm-review'));
      await waitFor(() => {
        expect(screen.getByText('Please provide a title'));
        expect(screen.getByText('Please provide your review'));
        expect(onCompleted).not.toHaveBeenCalled();
      });
    });
  });
});
