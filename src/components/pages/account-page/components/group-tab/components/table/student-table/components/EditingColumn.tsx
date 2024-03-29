import React, { FC, Fragment, useState } from 'react';
import { QueryObserverBaseResult } from 'react-query';
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  CheckCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { useMediaQuery } from '@mui/material';

import AlertButton from '@/components/common/ui/alert-button';
import { AlertButtonVariant } from '@/components/common/ui/alert-button/types';
import Button from '@/components/common/ui/button-mui';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import IconButton from '@/components/common/ui/icon-button-mui';
import {
  IconButtonColor,
  IconButtonShape,
} from '@/components/common/ui/icon-button-mui/types';
import Popup from '@/components/common/ui/pop-ups/Popup';
import roleNamesMapper from '@/components/pages/account-page/components/group-tab/components/table/constants';
import MobileDropdown from '@/components/pages/account-page/components/group-tab/components/table/student-table/components/MobileDropdown';
import UseAuthentication from '@/hooks/use-authentication/useAuthentication';
import { useToastError } from '@/hooks/use-toast-error/useToastError';
import GroupAPI from '@/lib/api/group/GroupAPI';
import theme from '@/styles/theme';
import { UserGroupRole } from '@/types/user';

import { StudentsTableItem } from '../../types';

interface EditingColumnProps {
  student: StudentsTableItem;
  refetch: QueryObserverBaseResult['refetch'];
}

const EditingColumn: FC<EditingColumnProps> = ({ student, refetch }) => {
  const { user } = UseAuthentication();
  const { displayError } = useToastError();
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);
  const [changePopupOpen, setChangePopupOpen] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down('desktop'));
  const handleDelete = async () => {
    try {
      setDeletePopupOpen(false);

      if (user.group) await GroupAPI.removeStudent(user.group.id, student.id);

      await refetch();
    } catch (error) {
      displayError(error);
    }
  };
  const handleChangeStatus = async () => {
    try {
      setChangePopupOpen(false);
      if (user.group)
        await GroupAPI.updateStudentRole(user?.group?.id, student.id, {
          roleName:
            student.role === UserGroupRole.MODERATOR
              ? UserGroupRole.STUDENT
              : UserGroupRole.MODERATOR,
        });
      await refetch();
    } catch (error) {
      displayError(error);
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
      <>
        <Popup
          icon={<CheckCircleIcon />}
          open={changePopupOpen}
          title={
            student.role === UserGroupRole.MODERATOR
              ? 'Зробити студентом'
              : 'Зробити заст. старости'
          }
          content={`Ти дійсно бажаєш зробити ${student.fullName} ${
            student.role === UserGroupRole.MODERATOR
              ? 'студентом'
              : 'заст. старости'
          }?`}
          onClose={() => setChangePopupOpen(false)}
          firstButton={
            <Button
              size={ButtonSize.SMALL}
              text="Скасувати"
              color={ButtonColor.PRIMARY}
              variant={ButtonVariant.OUTLINE}
              onClick={() => setChangePopupOpen(false)}
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
          icon={<TrashIcon />}
          open={deletePopupOpen}
          title="Видалити користувача"
          content={`Чи дійсно ти бажаєш видалити користувача ${student.fullName}? Якщо ти випадково видалиш користувача, йому треба буде відправити повторний запит до групи.`}
          onClose={() => setDeletePopupOpen(false)}
          firstButton={
            <Button
              size={ButtonSize.SMALL}
              text="Скасувати"
              color={ButtonColor.PRIMARY}
              variant={ButtonVariant.TEXT}
              onClick={() => setDeletePopupOpen(false)}
            />
          }
          secondButton={
            <AlertButton
              text="Видалити"
              variant={AlertButtonVariant.ERROR_OUTLINE}
              onClick={handleDelete}
            />
          }
        />
        {(student.role === UserGroupRole.STUDENT ||
          student.role === UserGroupRole.MODERATOR) &&
          !isMobile && (
            <Button
              text={buttonText}
              sx={{ width: 'fit-content', whiteSpace: 'nowrap' }}
              size={ButtonSize.SMALL}
              variant={ButtonVariant.OUTLINE}
              startIcon={buttonIcon}
              onClick={() => setChangePopupOpen(true)}
            />
          )}
        {isMobile ? (
          <MobileDropdown
            arrowIcon={buttonIcon}
            setDeletePopupOpen={setDeletePopupOpen}
            setChangePopupOpen={setChangePopupOpen}
            student={student}
          />
        ) : (
          <IconButton
            onClick={() => setDeletePopupOpen(true)}
            icon={<TrashIcon />}
            shape={IconButtonShape.CIRCLE}
            color={IconButtonColor.ERROR}
          />
        )}
      </>
    );
  }

  if (
    user.group?.role === UserGroupRole.MODERATOR &&
    student.role === UserGroupRole.STUDENT
  ) {
    return (
      <>
        <Popup
          open={deletePopupOpen}
          hasCross
          title="Видалити користувача"
          content={`Чи дійсно ти бажаєш видалити користувача ${student.fullName}? Якщо ти випадково видалиш користувача, йому треба буде відправити повторний запит до групи.`}
          onClose={() => setDeletePopupOpen(false)}
          firstButton={
            <Button
              size={ButtonSize.SMALL}
              text="Скасувати"
              color={ButtonColor.PRIMARY}
              variant={ButtonVariant.OUTLINE}
              onClick={() => setDeletePopupOpen(false)}
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
        {isMobile ? (
          <MobileDropdown
            arrowIcon={buttonIcon}
            setDeletePopupOpen={setDeletePopupOpen}
            setChangePopupOpen={setChangePopupOpen}
            student={student}
          />
        ) : (
          <IconButton
            onClick={() => setDeletePopupOpen(true)}
            icon={<TrashIcon />}
            shape={IconButtonShape.CIRCLE}
            color={IconButtonColor.SECONDARY}
          />
        )}
      </>
    );
  }
  return <Fragment></Fragment>;
};

export default EditingColumn;
