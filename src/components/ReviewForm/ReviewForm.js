import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input } from '../common';
import { useDispatch, useSelector } from 'react-redux';
import { selectReviewForm, setFormValues } from '../../slices/review';
import s from './ReviewForm.module.css';
import { Stars } from '../Stars';

const schema = yup
  .object({
    firstName: yup.string().required('Please provide your first name'),
    title: yup.string().required('Please provide a title'),
    review: yup.string().required('Please provide your review'),
    rating: yup
      .number()
      .min(1, 'Your rating must be greater than or equal to 1')
      .max(5)
      .required('Please provide a rating'),
  })
  .required();

function ReviewForm({ onCompleted }) {
  const dispatch = useDispatch();
  const reviewForm = useSelector(selectReviewForm);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: reviewForm,
  });
  const onSubmit = data => {
    dispatch(setFormValues(data));
    onCompleted();
  };
  const rating = watch('rating');

  return (
    <form
      className={s.root}
      onSubmit={handleSubmit(onSubmit)}
      aria-label="Add a review"
    >
      <Input
        className={s.input}
        name="firstname"
        label={'First Name: '}
        errors={errors?.firstName?.message}
        register={register('firstName')}
      />
      <Input
        className={s.input}
        name="title"
        label={'Title: '}
        errors={errors?.title?.message}
        register={register('title')}
      />
      <Input
        className={s.input}
        name="review"
        label={'Review: '}
        errors={errors?.review?.message}
        type="textarea"
        rows={4}
        cols={4}
        register={register('review')}
      />
      <Stars
        rating={rating}
        className={s.stars}
        error={errors?.rating?.message}
        onClick={value => {
          setValue('rating', value);
        }}
      />
      <Button type="submit" name="confirm-review" className={s.button}>
        Confirm
      </Button>
    </form>
  );
}

export default ReviewForm;
