import React from 'react';
import { Star as StarIcon } from 'react-feather';
import cn from 'classnames';
import s from './Star.module.css';

function Star({ isEmpty }) {
  return (
    <StarIcon
      className={cn({ [s.full]: !isEmpty, [s.empty]: isEmpty })}
      size={32}
      title="star-icon"
    />
  );
}

export default Star;
