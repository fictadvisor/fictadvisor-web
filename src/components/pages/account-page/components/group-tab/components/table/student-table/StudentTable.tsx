import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

import { CaptainIcon } from '@/components/common/custom-svg/CaptainIcon';
import { ModeratorIcon } from '@/components/common/custom-svg/ModeratorIcon';
import Button from '@/components/common/ui/button';
import Tag, { TagSize, TagVariant } from '@/components/common/ui/tag';
import CustomDivider from '@/components/pages/account-page/components/divider';
import EditingColumn from '@/components/pages/account-page/components/group-tab/components/table/student-table/components/EditingColumn';

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
  id: string;
}

interface StudentTableProps {
  rows: StudentTableItem[];
  variant: StudentRole;
  refetch;
}

const StudentTable: React.FC<StudentTableProps> = ({
  variant,
  rows,
  refetch,
}) => {
  return (
    <>
      {variant && (
        <CustomDivider text="Студенти">
          <div className={styles['button']}>
            <Button
              text={'Додати студента'}
              startIcon={<PlusIcon className={'icon'} />}
            />
          </div>
        </CustomDivider>
      )}
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
                <EditingColumn student={row} refetch={refetch} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentTable;