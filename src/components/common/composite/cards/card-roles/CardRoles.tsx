import React from 'react';
import cn from 'classnames';

import Tag, { TagColor, TagSize, TagVariant } from '@/components/common/ui/tag';
import { TeacherRole } from '@/types/teacher';

import styles from './CardRoles.module.scss';

export interface CardRolesProps {
  roles: TeacherRole[];
  className?: string;
}

const TagText: Record<TeacherRole, string> = {
  [TeacherRole.LABORANT]: 'Лаборант',
  [TeacherRole.LECTURER]: 'Лектор',
  [TeacherRole.PRACTICIAN]: 'Практик',
};

const TagColors: Record<TeacherRole, TagColor> = {
  [TeacherRole.LABORANT]: TagColor.MINT,
  [TeacherRole.LECTURER]: TagColor.VIOLET,
  [TeacherRole.PRACTICIAN]: TagColor.ORANGE,
};

export const CardRoles: React.FC<CardRolesProps> = ({ roles, className }) => {
  return (
    <div className={cn(styles['card-roles'], className)}>
      {roles.map(role => (
        <Tag
          size={TagSize.SMALL}
          text={TagText[role]}
          variant={TagVariant.FILLED}
          color={TagColors[role]}
          key={Math.random()}
        />
      ))}
    </div>
  );
};
