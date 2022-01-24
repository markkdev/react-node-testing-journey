import React from 'react';
import s from './Input.module.css';
import cn from 'classnames';

function Input({
  className,
  label,
  name,
  errors,
  register,
  type = 'input',
  ...rest
}) {
  const InputType = type;
  return (
    <span className={cn(s.root, className)}>
      <label className={cn(s.label)} htmlFor={name}>
        {label}
      </label>
      <InputType
        className={cn(s.input)}
        name={name}
        id={name}
        {...register}
        {...rest}
      />
      <span className={s.error}>{errors || ''}</span>
    </span>
  );
}

export default Input;
