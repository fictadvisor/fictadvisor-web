import React, { FC } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import {
  Avatar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import Button from '@/components/common/ui/button-mui';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import { TrashBucketButton } from '@/components/common/ui/icon-button-mui/variants';
import Tag from '@/components/common/ui/tag';
import {
  TagColor,
  TagSize,
  TagVariant,
} from '@/components/common/ui/tag/types';
import TeacherAPI from '@/lib/api/teacher/TeacherAPI';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';
import { Teacher } from '@/types/teacher';

import * as styles from './TeachersTable.styles';

interface TeachersAdminSearchProps {
  teachers?: Omit<Teacher, 'role'>[];
}

const TeachersTable: FC<TeachersAdminSearchProps> = ({ teachers }) => {
  const deleteTeacher = async (id: string) => {
    try {
      await TeacherAPI.delete(id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Table>
      <TableHead>
        <TableCell sx={mergeSx(styles.headItem, { minWidth: '574px' })}>
          Викладач
        </TableCell>
        <TableCell sx={styles.headItem}>Кафедри</TableCell>
        <TableCell sx={styles.headItem}>Теги</TableCell>
        <TableCell sx={styles.headItem} />
      </TableHead>
      <TableBody>
        {teachers &&
          teachers.map((teacher, index) => (
            <TableRow key={index}>
              <TableCell sx={styles.bodyItem}>
                <Stack sx={styles.tableColumn}>
                  <Avatar src={teacher.avatar} sx={{ width: 36, height: 36 }} />
                  <Typography sx={{ ml: '16px' }}>
                    {teacher.lastName} {teacher.firstName[0]}.{' '}
                    {teacher.middleName[0]}.
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell sx={styles.bodyItem}>
                <Stack sx={styles.tableColumn}>
                  <Tag
                    text="ОТ"
                    variant={TagVariant.OUTLINE}
                    color={TagColor.VIOLET}
                    size={TagSize.SMALL}
                    sx={styles.tag}
                  />
                  <Tag
                    text="ІПІ"
                    variant={TagVariant.OUTLINE}
                    color={TagColor.ORANGE}
                    size={TagSize.SMALL}
                    sx={styles.tag}
                  />
                </Stack>
              </TableCell>
              <TableCell sx={styles.bodyItem}>
                <Stack sx={styles.tableColumn}>
                  <Tag
                    text="Лекції"
                    variant={TagVariant.FILL}
                    color={TagColor.VIOLET}
                    size={TagSize.SMALL}
                    sx={styles.tag}
                  />
                  <Tag
                    text="Практики"
                    variant={TagVariant.FILL}
                    color={TagColor.ORANGE}
                    size={TagSize.SMALL}
                    sx={styles.tag}
                  />
                  <Tag
                    text="Лабораторні"
                    variant={TagVariant.FILL}
                    color={TagColor.INDIGO}
                    size={TagSize.SMALL}
                    sx={styles.tag}
                  />
                </Stack>
              </TableCell>
              <TableCell sx={styles.bodyItem}>
                <Stack sx={styles.tableColumn}>
                  <Button
                    href={`/admin/teachers/${teacher.id}`}
                    text="Редагувати"
                    variant={ButtonVariant.OUTLINE}
                    startIcon={<PencilSquareIcon />}
                    size={ButtonSize.SMALL}
                    sx={styles.button}
                  />
                  <TrashBucketButton
                    onClick={() => deleteTeacher(teacher.id)}
                  />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default TeachersTable;
