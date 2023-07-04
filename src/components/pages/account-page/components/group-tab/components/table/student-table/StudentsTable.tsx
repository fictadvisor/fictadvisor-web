import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PlusIcon } from '@heroicons/react/24/solid';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { AxiosError } from 'axios';
import Image from 'next/image';

import { AlertColor } from '@/components/common/ui/alert';
import Button from '@/components/common/ui/button-mui';
import Divider from '@/components/common/ui/divider-mui';
import { DividerTextAlign } from '@/components/common/ui/divider-mui/types';
import Tag from '@/components/common/ui/tag-mui';
import { TagSize, TagVariant } from '@/components/common/ui/tag-mui/types';
import roleNamesMapper from '@/components/pages/account-page/components/group-tab/components/table/constants';
import EditingColumn from '@/components/pages/account-page/components/group-tab/components/table/student-table/components/EditingColumn';
import { TextAreaPopup } from '@/components/pages/account-page/components/group-tab/components/text-area-popup';
import useAuthentication from '@/hooks/use-authentication';
import GroupAPI from '@/lib/api/group/GroupAPI';
import { showAlert } from '@/redux/reducers/alert.reducer';
import { UserGroupRole } from '@/types/user';

import { StudentsTableProps } from '../types';

import * as sxStyles from './StudentsTable.styles';

const StudentsTable: React.FC<StudentsTableProps> = ({
  role,
  rows,
  refetch,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { user } = useAuthentication();
  const dispatch = useDispatch();
  const handleAddStudents = async (value: string) => {
    try {
      const emails = value
        .split(/[\n\r\t ,]+/)
        .map(line => line.trim())
        .filter(line => line !== '' && line !== '\n');

      if (typeof user.group?.id === 'string')
        await GroupAPI.addStudentsByMail(user.group?.id, { emails });

      setIsPopupOpen(false);

      await refetch();
    } catch (error) {
      let name;
      if (error instanceof AxiosError) name = error.response?.data.error;

      if (name === 'AlreadyRegisteredException') {
        dispatch(
          showAlert({
            title: 'Один або декілька користувачів вже зареєстровані!',
            color: AlertColor.ERROR,
          }),
        );
      } else {
        dispatch(
          showAlert({
            title: 'Здається ти ввів неправильні значення!',
            color: AlertColor.ERROR,
          }),
        );
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
      {role !== UserGroupRole.STUDENT && (
        <Box sx={sxStyles.dividerWrapper}>
          <Divider
            text="Студенти"
            textAlign={DividerTextAlign.LEFT}
            sx={{ flexGrow: 1 }}
          />
          <Button
            sx={sxStyles.button}
            text={'Додати студента'}
            startIcon={<PlusIcon className={'icon'} />}
            onClick={() => setIsPopupOpen(true)}
          />
        </Box>
      )}
      <TableContainer component={Paper} sx={sxStyles.tableContainer}>
        <Table>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} sx={sxStyles.row}>
                <TableCell>
                  {row.imgSrc && (
                    <Image
                      width={48}
                      height={48}
                      src={row.imgSrc}
                      alt="avatar"
                    />
                  )}
                  <Typography>{row.fullName}</Typography>
                </TableCell>
                <TableCell>
                  {row.role !== UserGroupRole.STUDENT && (
                    <Tag
                      text={roleNamesMapper[row.role]}
                      variant={TagVariant.DARKER}
                      size={TagSize.SMALL}
                    />
                  )}
                </TableCell>
                <TableCell>
                  <Typography>{row.email}</Typography>
                </TableCell>
                <TableCell>
                  <EditingColumn student={row} refetch={refetch} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default StudentsTable;
