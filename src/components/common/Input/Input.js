import React from 'react';
import s from './Input.module.css';
import cn from 'classnames';

function Input({ className, label, name, errors, register, ...rest }) {
  return (
    <span className={cn(s.root, className)}>
      <label className={cn(s.label)} htmlFor={name}>
        {label}
      </label>
      <input
        className={cn(s.input)}
        type="text"
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
