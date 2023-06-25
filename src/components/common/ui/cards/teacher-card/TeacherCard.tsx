import React from 'react';
import mergeClassNames from 'merge-class-names';
import Image from 'next/image';

import styles from '@/components/common/ui/cards/teacher-card/TeacherCard.module.scss';
import { DivProps } from '@/components/common/ui/cards/types';
import Rating from '@/components/common/ui/rating-mui';

type TeacherCardProps = {
  name: string;
  avatar?: string;
  rating?: number;
  disabled?: boolean;
} & DivProps;

export const TeacherCard: React.FC<TeacherCardProps> = ({
  name,
  avatar,
  disabled,
  rating,
  ...rest
}) => {
  return (
    <div
      className={mergeClassNames(
        styles['teacher-card'],
        styles['teacher-card-effect'],
        disabled && styles['card-disabled'],
      )}
      {...rest}
    >
      <div className={styles['teacher-card-shift']}>
        <img
          className={styles['teacher-card-avatar']}
          src={avatar}
          alt="викладач"
        />
        <h4 className={styles['teacher-card-name']}>{name}</h4>
        <Rating rating={rating} />
      </div>
    </div>
  );
};
