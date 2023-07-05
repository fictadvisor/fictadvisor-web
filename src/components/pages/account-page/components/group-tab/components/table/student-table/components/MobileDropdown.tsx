import React, { FC, ReactNode, useRef, useState } from 'react';
import { EllipsisVerticalIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ClickAwayListener, Popper } from '@mui/base';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';

import Button from '@/components/common/ui/button-mui/Button';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import IconButton from '@/components/common/ui/icon-button-mui/IconButton';
import { IconButtonColor } from '@/components/common/ui/icon-button-mui/types';
import roleNamesMapper from '@/components/pages/account-page/components/group-tab/components/table/constants';
import useAuthentication from '@/hooks/use-authentication';
import { UserGroupRole } from '@/types/user';

import { StudentsTableItem } from '../../types';

import * as styles from './MobileDropdown.style';

export interface MobileStudentTableButtonsProps {
  setDeletePopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setChangePopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  student: StudentsTableItem;
  arrowIcon: ReactNode;
}

const MobileStudentsTableButtons: FC<MobileStudentTableButtonsProps> = ({
  setDeletePopupOpen,
  setChangePopupOpen,
  student,

  arrowIcon,
}) => {
  const { user } = useAuthentication();
  const [isPopperOpen, setIsPopperOpen] = useState<boolean>(false);
  const EllipsisIconRef = useRef<HTMLButtonElement>(null);
  const buttonName =
    student.role === UserGroupRole.MODERATOR
      ? roleNamesMapper[UserGroupRole.STUDENT]
      : roleNamesMapper[UserGroupRole.MODERATOR];

  return (
    <ClickAwayListener onClickAway={() => setIsPopperOpen(false)}>
      <Box>
        <IconButton
          ref={EllipsisIconRef}
          icon={<EllipsisVerticalIcon className={'icon'} />}
          color={IconButtonColor.TRANSPARENT}
          onClick={() => setIsPopperOpen(pr => !pr)}
          disabled={user.group?.role === UserGroupRole.STUDENT}
        ></IconButton>
        <Popper
          open={isPopperOpen}
          placement={'bottom-end'}
          anchorEl={EllipsisIconRef.current}
        >
          <Stack sx={styles.dropdown}>
            {user.group?.role === UserGroupRole.CAPTAIN &&
              student.role !== UserGroupRole.CAPTAIN && (
                <Button
                  size={ButtonSize.SMALL}
                  text={buttonName}
                  variant={ButtonVariant.TEXT}
                  startIcon={arrowIcon}
                  onClick={() => setChangePopupOpen(true)}
                />
              )}
            {((user.group?.role === UserGroupRole.CAPTAIN &&
              student.role !== UserGroupRole.CAPTAIN) ||
              (user.group?.role === UserGroupRole.MODERATOR &&
                student.role == UserGroupRole.STUDENT)) && (
              <Button
                size={ButtonSize.SMALL}
                text={'Видалити'}
                variant={ButtonVariant.TEXT}
                startIcon={<TrashIcon />}
                onClick={() => setDeletePopupOpen(true)}
              />
            )}
          </Stack>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

/*
*
*       {user.group?.role === UserGroupRole.CAPTAIN ? (
            <>
              {student.role !== UserGroupRole.CAPTAIN ? (
                <div className={styles['button']}>
                  <IconButton
                    icon={}
                    color={IconButtonColor.TRANSPARENT}
                    onClick={() => onChange(value)}
                  />
                  {currentValue === value && (
                    <div
                      className={styles['dropdown-content']}
                      ref={wrapperRef}
                    >
                      <Button
                        className={styles['dropdown-button']}
                        text={'Видалити'}
                        variant={ButtonVariant.TEXT}
                        startIcon={<TrashIcon className={'icon'} />}
                        onClick={() => setIsOpenDelete(true)}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className={styles['button']}>
                  <IconButton
                    icon={<EllipsisVerticalIcon className={'icon'} />}
                    color={IconButtonColor.TRANSPARENT}
                    disabled={true}
                    className={styles['disabled-button']}
                  />
                </div>
              )}
            </>
          ) : (
            user.group?.role === UserGroupRole.MODERATOR && (
              <>
                {student.role !== UserGroupRole.STUDENT ? (
                  <div className={styles['button']}>
                    <IconButton
                      icon={<EllipsisVerticalIcon className={'icon'} />}
                      color={IconButtonColor.TRANSPARENT}
                      onClick={() => onChange(value)}
                    />
                    {currentValue === value && (
                      <div
                        className={styles['moderator-dropdown-content']}
                        ref={wrapperRef}
                      >
                        <Button
                          className={styles['moderator-dropdown-button']}
                          text={'Видалити'}
                          variant={ButtonVariant.TEXT}
                          startIcon={<TrashIcon className={'icon'} />}
                          onClick={() => setIsOpenDelete(true)}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={styles['button']}>
                    <IconButton
                      icon={<EllipsisVerticalIcon className={'icon'} />}
                      color={IconButtonColor.TRANSPARENT}
                      disabled={true}
                      className={styles['disabled-button']}
                    />
                  </div>
                )}
              </>
            )
          )}
*
*
*
*
*
*
*
*
* */

export default MobileStudentsTableButtons;
