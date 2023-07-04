import React, { FC, Fragment, useState } from 'react';
import { QueryObserverBaseResult } from 'react-query';
import { useDispatch } from 'react-redux';
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { TableCell } from '@mui/material';

import { AlertColor } from '@/components/common/ui/alert';
import Button from '@/components/common/ui/button-mui';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import IconButton from '@/components/common/ui/icon-button-mui';
import { IconButtonShape } from '@/components/common/ui/icon-button-mui/types';
import Popup from '@/components/common/ui/pop-ups-mui/Popup';
import roleNamesMapper from '@/components/pages/account-page/components/group-tab/components/table/constants';
import UseAuthentication from '@/hooks/use-authentication/useAuthentication';
import GroupAPI from '@/lib/api/group/GroupAPI';
import { showAlert } from '@/redux/reducers/alert.reducer';
import { UserGroupRole } from '@/types/user';

import { StudentsTableItem } from '../../types';
interface EditingColumnProps {
  student: StudentsTableItem;
  refetch: QueryObserverBaseResult['refetch'];
}

const EditingColumn: FC<EditingColumnProps> = ({ student, refetch }) => {
  const { user } = UseAuthentication();
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenChange, setIsOpenChange] = useState(false);

  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      setIsOpenDelete(false);
      // TODO: remove as and refactor props
      await GroupAPI.removeStudent(user.group?.id as string, student.id);
      await refetch();
    } catch (e) {
      dispatch(
        showAlert({
          title: 'Щось пішло не так, спробуй пізніше!',
          color: AlertColor.ERROR,
        }),
      );
    }
  };

  const handleChangeStatus = async () => {
    try {
      setIsOpenChange(false);
      await GroupAPI.updateStudentRole(user?.group?.id as string, student.id, {
        roleName:
          student.role === UserGroupRole.MODERATOR
            ? UserGroupRole.STUDENT
            : UserGroupRole.MODERATOR,
      });
      await refetch();
    } catch (e) {
      dispatch(
        showAlert({
          title: 'Щось пішло не так, спробуй пізніше!',
          color: AlertColor.ERROR,
        }),
      );
    }
  };

  const buttonText =
    student.role === UserGroupRole.MODERATOR
      ? roleNamesMapper[UserGroupRole.STUDENT]
      : roleNamesMapper[UserGroupRole.MODERATOR];

  const buttonIcon =
    student.role === UserGroupRole.MODERATOR ? (
      <ArrowDownCircleIcon />
    ) : (
      <ArrowUpCircleIcon />
    );

  if (
    user.group?.role === UserGroupRole.CAPTAIN &&
    student.role !== UserGroupRole.CAPTAIN
  ) {
    return (
      <TableCell>
        <Popup
          open={isOpenChange}
          title={
            student.role === UserGroupRole.MODERATOR
              ? 'Зробити студентом'
              : 'Зробити зам старостою'
          }
          text={`Ви дійсно бажаєте зробити користувача ${student.fullName} ${
            student.role === UserGroupRole.MODERATOR
              ? 'студентом'
              : 'зам старостою'
          }?`}
          onClose={() => setIsOpenChange(false)}
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
        <Popup
          open={isOpenDelete}
          title="Видалити користувача"
          text={`Чи дійсно ви бажаєте видалити користувача ${student.fullName}? Якщо ви випадково видалите користувача, йому треба буд відправити повторний запит до групи.`}
          onClose={() => setIsOpenDelete(false)}
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
        <Button
          text={buttonText}
          sx={{ width: 'fit-content', whiteSpace: 'nowrap' }}
          size={ButtonSize.SMALL}
          variant={ButtonVariant.OUTLINE}
          startIcon={buttonIcon}
          onClick={() => setIsOpenChange(true)}
        />
        <IconButton
          onClick={() => setIsOpenDelete(true)}
          icon={<TrashIcon />}
          shape={IconButtonShape.CIRCLE}
        />
      </TableCell>
    );
  }

  if (user.group?.role === UserGroupRole.MODERATOR && !student.role) {
    return (
      <>
        <Popup
          open={isOpenDelete}
          title="Видалити користувача"
          text={`Чи дійсно ви бажаєте видалити користувача ${student.fullName}? Якщо ви випадково видалите користувача, йому треба буд відправити повторний запит до групи.`}
          onClose={() => setIsOpenDelete(false)}
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
        <IconButton
          onClick={() => setIsOpenDelete(true)}
          icon={<TrashIcon />}
          shape={IconButtonShape.CIRCLE}
        />
      </>
    );
  }
  return <Fragment></Fragment>;
};

export default EditingColumn;
