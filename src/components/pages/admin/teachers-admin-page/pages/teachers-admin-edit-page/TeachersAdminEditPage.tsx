import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import Image from 'next/image';

import Button from '@/components/common/ui/button-mui';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import Divider from '@/components/common/ui/divider';
import Input from '@/components/common/ui/form/input-mui';
import { InputSize } from '@/components/common/ui/form/input-mui/types';
import TextArea from '@/components/common/ui/form/text-area-mui';
import { initialValues } from '@/components/pages/admin/teachers-admin-page/components/teachers-admin-search/constants';
import { AdminSearchFormFields } from '@/components/pages/admin/teachers-admin-page/components/teachers-admin-search/types';
import TeachersAdminSelect from '@/components/pages/admin/teachers-admin-page/components/teachers-admin-select';
import TeacherAPI from '@/lib/api/teacher/TeacherAPI';

import * as styles from './TeachersAdminEditPage.styles';

interface TeachersAdminEditPageProps {
  teacherId: string;
}

const TeachersAdminEditPage: FC<TeachersAdminEditPageProps> = ({
  teacherId,
}) => {
  const { data: teacher } = useQuery('teacher', () =>
    TeacherAPI.get(teacherId),
  );
  const handleFormSubmit = (values: AdminSearchFormFields) => {};
  return (
    <Box sx={{ p: '16px' }}>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({ values }) => (
          <Form>
            <Box>
              <Box sx={styles.header}>
                <Box sx={styles.editName}>
                  <Typography sx={{ typography: 'h5' }}>Редагування</Typography>
                  <Typography sx={styles.name}>
                    {teacher?.lastName} {teacher?.firstName}{' '}
                    {teacher?.middleName}
                  </Typography>
                </Box>
                <Stack flexDirection="row" gap="8px">
                  <Button
                    sx={styles.button}
                    size={ButtonSize.MEDIUM}
                    color={ButtonColor.SECONDARY}
                    text="Скасувати"
                  />
                  <Button
                    sx={styles.button}
                    size={ButtonSize.MEDIUM}
                    variant={ButtonVariant.OUTLINE}
                    color={ButtonColor.SECONDARY}
                    startIcon={<TrashIcon />}
                    text="Видалити"
                  />
                  <Button
                    sx={styles.button}
                    size={ButtonSize.MEDIUM}
                    text="Зберегти"
                  />
                </Stack>
              </Box>
              {teacher && (
                <Stack flexDirection="column" gap="10px">
                  <Stack flexDirection="row" gap="36px">
                    <Stack flexDirection="column" gap="10px">
                      <Input
                        size={InputSize.MEDIUM}
                        sx={styles.input}
                        onChange={() => {}}
                        label="Ім'я"
                        value={teacher.firstName}
                      />
                      <Input
                        size={InputSize.MEDIUM}
                        sx={styles.input}
                        onChange={() => {}}
                        label="Прізвище"
                        value={teacher.lastName}
                      />
                      <Input
                        size={InputSize.MEDIUM}
                        sx={styles.input}
                        onChange={() => {}}
                        label="По батькові"
                        value={teacher.middleName}
                      />
                    </Stack>
                    <Avatar
                      src={teacher.avatar}
                      sx={{ width: 160, height: 160 }}
                    />
                  </Stack>
                  <TextArea
                    sx={styles.textArea}
                    value={teacher.description}
                    name={'description'}
                    label="Опис викладача"
                  />
                  <Divider />
                </Stack>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default TeachersAdminEditPage;
