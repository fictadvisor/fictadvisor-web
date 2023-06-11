import React from 'react';
import cn from 'classnames';

import { DivProps } from '@/components/common/composite/cards/Cards';
import styles from '@/components/common/composite/cards/subject-card/SubjectCard.module.scss';

type SubjectCardProps = {
  name: string;
  details?: string;
  rating?: number;
  disabled?: boolean;
} & DivProps;

export const SubjectCard: React.FC<SubjectCardProps> = ({
  name,
  details,
  disabled,
  ...rest
}) => {
  return (
    <div
      className={cn(styles['subject-card'], styles['subject-card-effect'], {
        [styles['card-disabled']]: disabled,
      })}
      {...rest}
    >
      <div className={styles['subject-name']}>{name}</div>
      {details && <p>{details}</p>}
    </div>
  );
};
