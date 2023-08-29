import React, { FC } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

import { CustomCheck } from '@/components/common/icons/CustomCheck';
import AlertButton from '@/components/common/ui/alert-button/AlertButton';
import { AlertButtonVariant } from '@/components/common/ui/alert-button/types';
import Divider from '@/components/common/ui/divider';
import { DividerTextAlign } from '@/components/common/ui/divider/types';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import GroupAPI from '@/lib/api/group/GroupAPI';
import getErrorMessage from '@/lib/utils/getErrorMessage';
import theme from '@/styles/theme';
import { UserGroupState } from '@/types/user';

import * as gridStyles from '../grid.styles';
import { RequestsTableProps } from '../types';

import * as styles from './RequestTable.styles';

const RequestsTable: FC<RequestsTableProps> = ({ rows, refetch }) => {
  const { user } = useAuthentication();
  const isMobile = useMediaQuery(theme.breakpoints.down('desktop'));
  const toast = useToast();
  const handleApprove = async (userId: string) => {
    try {
      if (user.group)
        await GroupAPI.verifyStudent(user.group?.id, userId, {
          state: UserGroupState.APPROVED,
        });
      await refetch();
    } catch (error) {
      const message = getErrorMessage(error);
      message
        ? toast.error(message, '', 3000)
        : toast.error('Щось пішло не так, спробуй пізніше!');
    }
  };

  const handleDecline = async (userId: string) => {
    try {
      if (user.group)
        await GroupAPI.verifyStudent(user.group?.id as string, userId, {
          state: UserGroupState.DECLINED,
        });
      await refetch();
    } catch (error) {
      const message = getErrorMessage(error);
      message
        ? toast.error(message, '', 3000)
        : toast.error('Щось пішло не так, спробуй пізніше!');
    }
  };

  return (
    <>
      <Divider
        text="Нові запити"
        textAlign={DividerTextAlign.LEFT}
        sx={styles.divider}
      />
      <Grid container sx={gridStyles.studentsGrid}>
        {rows.map((row, index) => (
          <Grid container key={index} sx={gridStyles.row}>
            {row.imgSrc && (
              <Grid item desktop={6} mobile={7}>
                <img width={48} height={48} src={row.imgSrc} alt="avatar" />
                {!isMobile && (
                  <Typography className="name">{row.fullName}</Typography>
                )}
                {isMobile && (
                  <Box>
                    <Typography className="name">{row.fullName}</Typography>
                    <Typography className="email">{row.email}</Typography>
                  </Box>
                )}
              </Grid>
            )}

            <Grid item mobile={3} desktop={4}>
              {!isMobile && (
                <Typography className="email">{row.email}</Typography>
              )}
            </Grid>
            <Grid item mobile={2} desktop={2} sx={styles.lastColumn}>
              {isMobile ? (
                <AlertButton
                  sx={styles.fixSized}
                  variant={AlertButtonVariant.SUCCESS}
                  endIcon={<CustomCheck />}
                  onClick={() => handleApprove(row.id)}
                />
              ) : (
                <AlertButton
                  text={'Прийняти'}
                  variant={AlertButtonVariant.SUCCESS}
                  endIcon={<CustomCheck />}
                  onClick={() => handleApprove(row.id)}
                />
              )}

              <AlertButton
                sx={styles.fixSized}
                variant={AlertButtonVariant.ERROR_OUTLINE}
                startIcon={<XMarkIcon className="icon" />}
                onClick={() => handleDecline(row.id)}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RequestsTable;
