import React from 'react';
import { useSelector } from 'react-redux';
import { selectReviewForm } from '../../slices/review';
import s from './ReviewFormConfirmation.module.css';
import ReviewFormFieldValue from './ReviewFormFieldValue';

function ReviewFormConfirmation() {
  const formValues = useSelector(selectReviewForm);

  return (
    <div className={s.root}>
      <ReviewFormFieldValue
        fieldName={'First Name'}
        value={formValues.firstName}
      />
      <ReviewFormFieldValue fieldName={'Title'} value={formValues.title} />
      <ReviewFormFieldValue fieldName={'Review'} value={formValues.review} />
      <ReviewFormFieldValue fieldName={'Rating'} value={formValues.rating} />
    </div>
  );
}

export default ReviewFormConfirmation;
