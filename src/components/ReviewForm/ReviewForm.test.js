import * as React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReviewForm } from '.';

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
    render(<ReviewForm onCompleted={onCompleted} />);
    expect(
      screen.getByRole('form', { name: 'Add a review' }),
    ).toBeInTheDocument();
  });

  describe('Review Form Happy Path', () => {
    it('allows you to fill and submit the form', async () => {
      render(<ReviewForm onCompleted={onCompleted} />);
      userEvent.type(getInput('firstname'), firstname);
      expect(getInput('firstname')).toHaveValue(firstname);
      userEvent.type(getInput('title'), title);
      expect(getInput('title')).toHaveValue(title);
      userEvent.type(getInput('review'), review);
      expect(getInput('review')).toHaveValue(review);
      const starIcons = screen.getAllByTitle('star-icon');
      expect(starIcons[4]).toHaveAttribute('class', 'full');
      userEvent.click(getButton('submit-review'));
      await waitFor(() => {
        expect(onCompleted).toHaveBeenCalled();
      });
    });
  });

  describe('Review Form Missing Inputs', () => {
    it('fails if the firstname is missing', async () => {
      render(<ReviewForm onCompleted={onCompleted} />);
      userEvent.type(getInput('title'), title);
      expect(getInput('title')).toHaveValue(title);
      userEvent.type(getInput('review'), review);
      expect(getInput('review')).toHaveValue(review);
      const starIcons = screen.getAllByTitle('star-icon');
      expect(starIcons[4]).toHaveAttribute('class', 'full');
      userEvent.click(getButton('submit-review'));
      await waitFor(() => {
        expect(screen.getByText('Please provide your first name'));
        expect(onCompleted).not.toHaveBeenCalled();
      });
    });

    it('fails if the title is missing', async () => {
      render(<ReviewForm onCompleted={onCompleted} />);
      userEvent.type(getInput('firstname'), firstname);
      expect(getInput('firstname')).toHaveValue(firstname);
      userEvent.type(getInput('review'), review);
      expect(getInput('review')).toHaveValue(review);
      const starIcons = screen.getAllByTitle('star-icon');
      expect(starIcons[4]).toHaveAttribute('class', 'full');
      userEvent.click(getButton('submit-review'));
      await waitFor(() => {
        expect(screen.getByText('Please provide a title'));
        expect(onCompleted).not.toHaveBeenCalled();
      });
    });

    it('fails if the review is missing', async () => {
      render(<ReviewForm onCompleted={onCompleted} />);
      userEvent.type(getInput('firstname'), firstname);
      expect(getInput('firstname')).toHaveValue(firstname);
      userEvent.type(getInput('title'), title);
      expect(getInput('title')).toHaveValue(title);
      const starIcons = screen.getAllByTitle('star-icon');
      expect(starIcons[4]).toHaveAttribute('class', 'full');
      userEvent.click(getButton('submit-review'));
      await waitFor(() => {
        expect(screen.getByText('Please provide your review'));
        expect(onCompleted).not.toHaveBeenCalled();
      });
    });

    it('fails if no stars are selected', async () => {
      render(<ReviewForm onCompleted={onCompleted} />);
      userEvent.type(getInput('firstname'), firstname);
      expect(getInput('firstname')).toHaveValue(firstname);
      userEvent.type(getInput('title'), title);
      expect(getInput('title')).toHaveValue(title);
      userEvent.type(getInput('review'), review);
      expect(getInput('review')).toHaveValue(review);
      userEvent.click(getStarButton(5));
      userEvent.click(getButton('submit-review'));
      await waitFor(() => {
        expect(
          screen.getByText('Your rating must be greater than or equal to 1'),
        );
        expect(onCompleted).not.toHaveBeenCalled();
      });
    });

    it('fails if thing is entered', async () => {
      render(<ReviewForm onCompleted={onCompleted} />);
      userEvent.click(getStarButton(5));
      userEvent.click(getButton('submit-review'));
      await waitFor(() => {
        expect(screen.getByText('Please provide a title'));
        expect(screen.getByText('Please provide your review'));

        expect(
          screen.getByText('Your rating must be greater than or equal to 1'),
        );
        expect(
          screen.getByText('Your rating must be greater than or equal to 1'),
        );
        expect(onCompleted).not.toHaveBeenCalled();
      });
    });
  });
});
