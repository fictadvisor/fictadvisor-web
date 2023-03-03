import React from 'react';
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from '@heroicons/react/24/outline';

import { CaptainIcon } from '@/components/common/custom-svg/CaptainIcon';
import { ModeratorIcon } from '@/components/common/custom-svg/ModeratorIcon';
import Button, {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button';
import { TrashBucketButton } from '@/components/common/ui/icon-button/variants';
import Tag, { TagSize, TagVariant } from '@/components/common/ui/tag';

import styles from './StudentTable.module.scss';
export enum StudentRole {
  CAPTAIN = 'Староста',
  MODERATOR = 'Зам. старости',
  STUDENT = 'Студент',
}
export interface StudentTableItem {
  imgSrc?: string;
  fullName: string;
  role: string;
  email: string;
  value: string;
}

interface StudentTableProps {
  rows: StudentTableItem[];
  variant: StudentRole;
}

const getSettings = (variant: StudentRole, role: string) => {
  const buttonText =
    role === StudentRole.MODERATOR
      ? StudentRole.STUDENT
      : StudentRole.MODERATOR;
  const buttonIcon =
    role === StudentRole.MODERATOR ? (
      <ArrowDownCircleIcon className="icon" />
    ) : (
      <ArrowUpCircleIcon className="icon" />
    );
  if (variant === StudentRole.CAPTAIN && role !== StudentRole.CAPTAIN) {
    return (
      <div className={styles['side-buttons']}>
        <div>
          <Button
            text={buttonText}
            size={ButtonSize.SMALL}
            variant={ButtonVariant.OUTLINE}
            startIcon={buttonIcon}
            className={styles['role-modifier']}
          />
        </div>
        <div>
          <TrashBucketButton />
        </div>
      </div>
    );
  }
  if (variant === StudentRole.MODERATOR && !role) {
    return <TrashBucketButton />;
  }
};

const StudentTable: React.FC<StudentTableProps> = ({ variant, rows }) => {
  return (
    <div className={styles['table']}>
      {rows.map((row, index) => (
        <div key={index} className={styles['table-container']}>
          <div className={styles['user-info']}>
            <img className={styles['img']} src={row.imgSrc} alt="avatar" />
            <div className={styles['full-name']}>{row.fullName}</div>
            <div className={styles['tag-container']}>
              <div className={styles['tag']}>
                {row.role && (
                  <Tag
                    className={'tag-role'}
                    text={row.role}
                    variant={TagVariant.DARKER}
                    size={TagSize.SMALL}
                  />
                )}
              </div>
              <div className={styles['tag-mobile']}>
                {row.role && (
                  <Tag
                    className={'tag-role'}
                    size={TagSize.SMALL}
                    variant={TagVariant.DARKER}
                    icon={
                      row.role === StudentRole.CAPTAIN ? (
                        <CaptainIcon />
                      ) : (
                        <ModeratorIcon />
                      )
                    }
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles['other-content']}>
            <div className={styles['email']}>{row.email}</div>
            <div className={styles['side-buttons']}>
              {getSettings(variant, row.role)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentTable;