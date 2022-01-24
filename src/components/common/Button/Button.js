import React from 'react';
import cn from 'classnames';
import s from './Button.module.css';

function Button({ name, onClick, className, children, ...rest }) {
  return (
    <button
      className={cn(s.root, className)}
      name={name}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
