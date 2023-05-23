import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

import { CaptainIcon } from '@/components/common/custom-svg/CaptainIcon';
import { ModeratorIcon } from '@/components/common/custom-svg/ModeratorIcon';
import {
  IconButton,
  IconButtonShape,
} from '@/components/common/ui/icon-button/IconButton';
import Tag, { TagSize } from '@/components/common/ui/tag';
import CustomDivider from '@/components/pages/account-page/components/divider';
import MobileStudentTableButtons from '@/components/pages/account-page/components/group-tab/components/table/mobile-student-table/components/mobile-student-table-buttons';
import { StudentRole } from '@/components/pages/account-page/components/group-tab/components/table/student-table/StudentTable';
import { TextAreaPopup } from '@/components/pages/account-page/components/group-tab/components/text-area-popup';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import GroupAPI from '@/lib/api/group/GroupAPI';

import styles from './MobileStudentTable.module.scss';

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

const MobileStudentTable: React.FC<StudentTableProps> = ({
  variant,
  rows,
  refetch,
}) => {
  const [openedIndex, setOpenedIndex] = useState(-1);

  const { user, token } = useAuthentication();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const toast = useToast();
  const handleAddStudents = async value => {
    try {
      const emails = value
        .split(/[\n\r\t ,]+/)
        .map(line => line.trim())
        .filter(line => line !== '' && line !== '\n');

      await GroupAPI.addStudentsByMail(user.group.id, token, { emails });
      setIsPopupOpen(false);
      refetch();
    } catch (e) {
      const name = e.response?.data.error;
      if (name === 'AlreadyRegisteredException') {
        toast.error('Один або декілька користувачів вже зареєстровані!');
      } else {
        toast.error('Здається ти ввів неправильні значення!');
      }
    }
  };

  return (
    <>
      {isPopupOpen && (
        <TextAreaPopup
          handleSubmit={handleAddStudents}
          closeFunction={() => setIsPopupOpen(false)}
        />
      )}
      {variant && (
        <CustomDivider text="Студенти">
          <div className={styles['button']}>
            <IconButton
              icon={<PlusIcon className={'icon'} />}
              shape={IconButtonShape.SQUARE}
              onClick={() => setIsPopupOpen(true)}
            />
          </div>
        </CustomDivider>
      )}
      <div className={styles['table']}>
        {rows.map((row, index) => (
          <div
            key={index}
            className={
              styles[
                rows.length === 1
                  ? 'table-container-one'
                  : index === rows.length - 1
                  ? 'table-container-end'
                  : index === 0
                  ? 'table-container-start'
                  : 'table-container'
              ]
            }
          >
            <img className={styles['img']} src={row.imgSrc} alt="avatar" />
            <div className={styles['user-info']}>
              <h6 className={styles['full-name']}>{row.fullName}</h6>
              <h6 className={styles['email']}>{row.email}</h6>
            </div>
            <div className={styles['tag']}>
              {row.role && (
                <Tag
                  size={TagSize.SMALL}
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
            <MobileStudentTableButtons
              value={index}
              currentValue={openedIndex}
              onChange={setOpenedIndex}
              variant={variant}
              student={row}
              refetch={refetch}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileStudentTable;
