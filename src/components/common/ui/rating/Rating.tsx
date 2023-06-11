import React from 'react';
import cn from 'classnames';

import styles from './Rating.module.scss';

//rating - number beetween 0 and 5
type RatingProps = {
  rating: number;
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Rating: React.FC<RatingProps> = ({ rating, className, ...rest }) => {
  return (
    <div className={cn(styles[`rating-conatainer`], className)} {...rest}>
      <div className={styles['ratings']}>
        <div className={styles['empty-stars']}></div>
        <div
          className={styles['full-stars']}
          style={{
            width: `${(rating / 5) * 100}%`,
          }}
        ></div>
      </div>
      <span>{rating}</span>
    </div>
  );
};

export default Rating;
