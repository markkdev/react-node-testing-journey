import React from 'react';
import { Circles } from 'react-loader-spinner';
import cn from 'classnames';
import s from './Button.module.css';

function Button({ name, onClick, className, children, loading, ...rest }) {
  return (
    <button
      className={cn(s.root, className)}
      aria-label={name}
      onClick={onClick}
      {...rest}
    >
      {!loading ? (
        children
      ) : (
        <Circles
          height={20}
          width={20}
          color="white"
          ariaLabel="loading-indicator"
        />
      )}
    </button>
  );
}

export default Button;
