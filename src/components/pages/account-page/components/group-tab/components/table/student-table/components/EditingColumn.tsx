import React, { FC, useState } from 'react';
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from '@heroicons/react/24/outline';

import { Popup } from '@/components/common/composite/popup';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button';
import { TrashBucketButton } from '@/components/common/ui/icon-button/variants';
import {
  StudentRole,
  StudentTableItem,
} from '@/components/pages/account-page/components/group-tab/components/table/student-table/StudentTable';
import dataMapper from '@/components/pages/account-page/components/group-tab/components/table/student-table/utils';
import UseAuthentication from '@/hooks/use-authentication/useAuthentication';
import useToast from '@/hooks/use-toast';
import GroupAPI from '@/lib/api/group/GroupAPI';

import styles from '../StudentTable.module.scss';

interface EditingColumnProps {
  student: StudentTableItem;
  refetch;
}

const EditingColumn: FC<EditingColumnProps> = ({ student, refetch }) => {
  const { user, token } = UseAuthentication();
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenChange, setIsOpenChange] = useState(false);

  const toast = useToast();
  const handleDelete = async () => {
    try {
      setIsOpenDelete(false);
      await GroupAPI.removeStudent(user.group.id, student.id, token);
      await refetch();
    } catch (e) {
      toast.error('Щось пішло не так, спробуй пізніше!');
    }
  };

  const handleChangeStatus = async () => {
    try {
      setIsOpenChange(false);
      await GroupAPI.switchStudentRole(user.group.id, student.id, token, {
        roleName:
          student.role === StudentRole.MODERATOR ? 'STUDENT' : 'MODERATOR',
      });
      await refetch();
    } catch (e) {
      toast.error('Щось пішло не так, спробуй пізніше!');
    }
  };

  const buttonText =
    student.role === StudentRole.MODERATOR
      ? StudentRole.STUDENT
      : StudentRole.MODERATOR;
  const buttonIcon =
    student.role === StudentRole.MODERATOR ? (
      <ArrowDownCircleIcon className="icon" />
    ) : (
      <ArrowUpCircleIcon className="icon" />
    );

  if (
    dataMapper[user.group.role] === StudentRole.CAPTAIN &&
    student.role !== StudentRole.CAPTAIN
  ) {
    return (
      <div className={styles['side-buttons']}>
        {isOpenChange && (
          <Popup
            isClosable={true}
            hasIcon={true}
            title={
              student.role === StudentRole.MODERATOR
                ? 'Зробити студентом'
                : 'Зробити зам старостою'
            }
            text={`Ви дійсно бажаєте зробити користувача ${student.fullName} ${
              student.role === StudentRole.MODERATOR
                ? 'студентом'
                : 'зам старостою'
            }?`}
            closeFunction={() => setIsOpenChange(false)}
            firstButton={
              <Button
                size={ButtonSize.SMALL}
                text="Скасувати"
                color={ButtonColor.PRIMARY}
                variant={ButtonVariant.OUTLINE}
                onClick={() => setIsOpenChange(false)}
              />
            }
            secondButton={
              <Button
                size={ButtonSize.SMALL}
                text="Так"
                color={ButtonColor.PRIMARY}
                variant={ButtonVariant.FILLED}
                onClick={handleChangeStatus}
              />
            }
          />
        )}
        {isOpenDelete && (
          <Popup
            isClosable={true}
            hasIcon={true}
            title="Видалити користувача"
            text={`Чи дійсно ви бажаєте видалити користувача ${student.fullName}? Якщо ви випадково видалите користувача, йому треба буд відправити повторний запит до групи.`}
            closeFunction={() => setIsOpenDelete(false)}
            firstButton={
              <Button
                size={ButtonSize.SMALL}
                text="Скасувати"
                color={ButtonColor.PRIMARY}
                variant={ButtonVariant.OUTLINE}
                onClick={() => setIsOpenDelete(false)}
              />
            }
            secondButton={
              <Button
                size={ButtonSize.SMALL}
                text="Так"
                color={ButtonColor.PRIMARY}
                variant={ButtonVariant.FILLED}
                onClick={handleDelete}
              />
            }
          />
        )}
        <div>
          <Button
            text={buttonText}
            size={ButtonSize.SMALL}
            variant={ButtonVariant.OUTLINE}
            startIcon={buttonIcon}
            className={styles['role-modifier']}
            onClick={() => setIsOpenChange(true)}
          />
        </div>
        <div>
          <TrashBucketButton onClick={() => setIsOpenDelete(true)} />
        </div>
      </div>
    );
  }

  if (dataMapper[user.group.role] === StudentRole.MODERATOR && !student.role) {
    return (
      <>
        {isOpenDelete && (
          <Popup
            isClosable={true}
            hasIcon={true}
            title="Видалити користувача"
            text={`Чи дійсно ви бажаєте видалити користувача ${student.fullName}? Якщо ви випадково видалите користувача, йому треба буд відправити повторний запит до групи.`}
            closeFunction={() => setIsOpenDelete(false)}
            firstButton={
              <Button
                size={ButtonSize.SMALL}
                text="Скасувати"
                color={ButtonColor.PRIMARY}
                variant={ButtonVariant.OUTLINE}
                onClick={() => setIsOpenDelete(false)}
              />
            }
            secondButton={
              <Button
                size={ButtonSize.SMALL}
                text="Так"
                color={ButtonColor.PRIMARY}
                variant={ButtonVariant.FILLED}
                onClick={handleDelete}
              />
            }
          />
        )}
        <TrashBucketButton
          onClick={() => {
            setIsOpenDelete(true);
          }}
        />
      </>
    );
  }
};

export default EditingColumn;
