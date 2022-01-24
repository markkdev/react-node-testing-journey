import React from 'react';
import { Star } from 'react-feather';
import cn from 'classnames';
import s from 'Stars.module.css';

function Stars({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star className={cn({ [s.full]: rating > i, [s.empty]: rating <= i })} />,
    );
  }
  return stars;
}

export default Stars;
