import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input } from '../common';
import s from './ReviewForm.module.css';

const schema = yup
  .object({
    firstName: yup.string().required('Please provide your first name'),
    title: yup.string().required('Please provide a title'),
    review: yup.string().required('Please provide your review'),
    rating: yup.number().min(0).max(5).required('Please provide a rating'),
  })
  .required();

const defaultValues = {
  rating: 5,
};

function ReviewForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const onSubmit = data => console.log(data);
  return (
    <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
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
        register={register('review')}
      />
      <Button type="submit" name="submit-review" className={s.button}>
        Submit
      </Button>
    </form>
  );
}

export default ReviewForm;
