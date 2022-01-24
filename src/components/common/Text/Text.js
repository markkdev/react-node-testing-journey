import React from 'react';
import s from './Text.module.css';
import cn from 'classnames';

function Text({ children, variant = 'p', className }) {
  const rootClass = cn(
    s.root,
    {
      [s.h1]: variant === 'h1',
      [s.h2]: variant === 'h2',
      [s.h3]: variant === 'h3',
      [s.h4]: variant === 'h4',
      [s.p]: variant === 'p',
    },
    className,
  );
  const Variant = variant;
  return <Variant className={rootClass}>{children}</Variant>;
}

export default Text;
