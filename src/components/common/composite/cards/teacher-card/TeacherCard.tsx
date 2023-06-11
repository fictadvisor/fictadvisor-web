import React from 'react';
import cn from 'classnames';

import { DivProps } from '@/components/common/composite/cards/Cards';
import styles from '@/components/common/composite/cards/teacher-card/TeacherCard.module.scss';

type TeacherCardProps = {
  name: string;
  avatar?: string;
  disabled?: boolean;
} & DivProps;

export const TeacherCard: React.FC<TeacherCardProps> = ({
  name,
  avatar,
  disabled,
  ...rest
}) => {
  return (
    <div
      className={cn(styles['teacher-card'], styles['teacher-card-effect'], {
        [styles['card-disabled']]: disabled,
      })}
      {...rest}
    >
      <div className={styles['teacher-card-shift']}>
        <img
          className={styles['teacher-card-avatar']}
          src={avatar}
          alt="викладач"
        />
        <h4 className={styles['teacher-card-name']}>{name}</h4>
      </div>
    </div>
  );
};
