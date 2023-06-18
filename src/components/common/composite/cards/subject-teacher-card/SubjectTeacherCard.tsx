import React from 'react';
import cn from 'classnames';

import { CardRoles } from '@/components/common/composite/cards/card-roles';
import { DivProps } from '@/components/common/composite/cards/Cards';
import styles from '@/components/common/composite/cards/subject-teacher-card/SubjectTeacherCard.module.scss';
import { TeacherRole } from '@/types/teacher';

type SubjectTeacherCardProps = {
  name: string;
  rating?: number;
  roles?: TeacherRole[];
  avatar?: string;
  disabled?: boolean;
} & DivProps;

export const SubjectTeacherCard: React.FC<SubjectTeacherCardProps> = ({
  name,
  roles = [],
  avatar,
  disabled,
  ...rest
}) => {
  return (
    <div
      className={cn(
        styles['subject-teacher-card'],
        styles['subject-teacher-card-effect'],
        { [styles['card-disabled']]: disabled },
      )}
      {...rest}
    >
      <div className={styles['subject-teacher-card-shift']}>
        <img
          className={styles['subject-teacher-card-avatar']}
          src={avatar}
          alt="викладач"
        />
        <CardRoles
          roles={roles}
          className={styles['subject-teacher-card-roles']}
        />
        <h4 className={styles['subject-teacher-card-name']}>{name}</h4>
      </div>
    </div>
  );
};
