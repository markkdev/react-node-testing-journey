import React from 'react';
import { Text } from '../common';
import s from './ReviewFormConfirmation.module.css';

function ReviewFormFieldValue({ fieldName, value }) {
  return (
    <span className={s.fieldContainer}>
      <Text variant="p" className={s.formField}>
        {fieldName}:
      </Text>
      <Text variant="p" className={s.formValue}>
        {value}
      </Text>
    </span>
  );
}

export default ReviewFormFieldValue;
