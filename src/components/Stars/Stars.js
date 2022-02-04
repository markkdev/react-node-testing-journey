import React, { useState } from 'react';
import { Star, Button } from '../common';
import cn from 'classnames';
import s from './Stars.module.css';

function Stars({ rating, className, onClick, error }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div role="presentation" className={cn(s.root, className)}>
      <div className={s.starContainer}>
        {new Array(5).fill(0).map((_, i) => {
          const key = `star-icon-${i}`;
          const isEmpty =
            (hoverIndex !== null && hoverIndex < i) ||
            (rating <= i && hoverIndex === null);
          return (
            <Button
              key={key}
              className={s.buttonWrapper}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => onClick(i + 1)}
              type="button"
              name={`select-rating-${i + 1}`}
            >
              <Star isEmpty={isEmpty} />
            </Button>
          );
        })}
      </div>
      <span className={s.error}>{error || ''}</span>
    </div>
  );
}

export default Stars;
