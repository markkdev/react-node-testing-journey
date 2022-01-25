import React, { useState, memo } from 'react';
import { Star } from '..';
import cn from 'classnames';
import s from './Stars.module.css';
import { Button } from '..';

function Stars({ rating, className, onClick, error }) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const isEmpty =
      (hoverIndex !== null && hoverIndex < i) ||
      (rating <= i && hoverIndex === null);
    stars.push(
      <Button
        className={s.buttonWrapper}
        onMouseEnter={() => setHoverIndex(i)}
        onMouseLeave={() => setHoverIndex(null)}
        onClick={() => onClick(i === rating - 1 ? 0 : i + 1)}
        type="button"
      >
        <Star isEmpty={isEmpty} />
      </Button>,
    );
  }
  return (
    <div role="presentation" className={cn(s.root, className)}>
      <div className={s.starContainer}>{stars}</div>
      <span className={s.error}>{error || ''}</span>
    </div>
  );
}

export default memo(Stars);
