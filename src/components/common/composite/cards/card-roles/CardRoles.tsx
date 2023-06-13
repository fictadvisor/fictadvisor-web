import React from 'react';
import cn from 'classnames';

import Tag, { TagColor, TagSize, TagVariant } from '@/components/common/ui/tag';

import styles from './CardRoles.module.scss';

export interface CardRolesProps {
  roles: Role[];
  className?: string;
}

export enum Role {
  LABORANT = 'laborant',
  LECTURER = 'lecturer',
  PRACTICIAN = 'practician',
}

const TagText: Record<Role, string> = {
  [Role.LABORANT]: 'Лаборант',
  [Role.LECTURER]: 'Лектор',
  [Role.PRACTICIAN]: 'Практик',
};

const TagColors: Record<Role, TagColor> = {
  [Role.LABORANT]: TagColor.MINT,
  [Role.LECTURER]: TagColor.VIOLET,
  [Role.PRACTICIAN]: TagColor.ORANGE,
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
