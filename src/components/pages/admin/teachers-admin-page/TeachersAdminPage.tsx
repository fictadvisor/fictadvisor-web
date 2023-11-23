import React, { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Box, TablePagination } from '@mui/material';
import { isAxiosError } from 'axios';

import TeachersAdminSearch from '@/components/pages/admin/teachers-admin-page/components/teachers-admin-search';
import { initialValues } from '@/components/pages/admin/teachers-admin-page/components/teachers-admin-search/constants';
import { AdminSearchFormFields } from '@/components/pages/admin/teachers-admin-page/components/teachers-admin-search/types';
import TeachersTable from '@/components/pages/admin/teachers-admin-page/components/teachers-table';
import { useToastError } from '@/hooks/use-toast-error/useToastError';
import teachersApi from '@/lib/api/teacher/TeacherAPI';

import * as styles from './TeachersAdminPage.styles';

const TeachersAdminPage: FC = () => {
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [curPage, setCurPage] = useState(0);
  const [params, setParams] = useState<AdminSearchFormFields>(initialValues);
  const toast = useToastError();
  const { data, isLoading, refetch } = useQuery(
    [curPage, 'teachers', pageSize],
    () => teachersApi.getAll(params, pageSize, curPage),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onSuccess: data => {
        setCount(data?.pagination?.totalAmount || 0);
      },
      onError: error => {
        if (isAxiosError(error)) {
          toast.displayError(error.response?.data.message);
        }
      },
    },
  );

  const handleChange = (values: AdminSearchFormFields) => {
    setParams(values);
    setCurPage(0);
    refetch();
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPageSize(Number(event.target.value));
    setCurPage(0);
  };

  return (
    <Box sx={{ p: '20px 16px 0 16px' }}>
      <TeachersAdminSearch onSubmit={handleChange} />
      <TeachersTable
        teachers={data?.teachers}
        isLoading={isLoading}
        count={pageSize}
      />
      <TablePagination
        sx={styles.pagination}
        count={count}
        page={curPage}
        rowsPerPage={pageSize}
        onPageChange={(e, page) => setCurPage(page)}
        onRowsPerPageChange={e => handleRowsPerPageChange(e)}
      />
    </Box>
  );
};

export default TeachersAdminPage;
