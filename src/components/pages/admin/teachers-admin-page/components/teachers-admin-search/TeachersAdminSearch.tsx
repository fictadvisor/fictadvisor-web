import React, { FC, useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from '@heroicons/react/24/outline';
import { Box, Divider } from '@mui/material';
import { Form, Formik } from 'formik';

import { Input, InputSize, InputType } from '@/components/common/ui/form';
import {
  IconButtonColor,
  IconButtonShape,
} from '@/components/common/ui/icon-button';
import IconButton from '@/components/common/ui/icon-button-mui';
import { IconButtonSize } from '@/components/common/ui/icon-button-mui/types';
import { initialValues } from '@/components/pages/admin/teachers-admin-page/components/teachers-admin-search/constants';
import { AdminSearchFormFields } from '@/components/pages/admin/teachers-admin-page/components/teachers-admin-search/types';
import CathedraAPI from '@/lib/api/cathedras/CathedraAPI';

import * as styles from './TeachersAdminSearch.styles';

export interface TeachersAdminSearchProps {
  onSubmit: (values: AdminSearchFormFields) => void;
}

const TeachersAdminSearch: FC<TeachersAdminSearchProps> = ({ onSubmit }) => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const handleFormSubmit = useCallback(
    (values: AdminSearchFormFields) => {
      onSubmit({ ...values, order });
    },
    [onSubmit, order],
  );

  const handleOrderChange = (values: AdminSearchFormFields) => {
    setOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    handleFormSubmit(values);
  };

  const { data: cathedras } = useQuery('cathedras', CathedraAPI.getAll, {
    staleTime: Infinity,
    onError: err => {
      console.log(err);
    },
  });

  console.log(cathedras);

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ values }) => (
        <Form>
          <Box sx={styles.form}>
            <Box>
              <Input
                value={values.search}
                onChange={() => onSubmit(values)}
                size={InputSize.LARGE}
                type={InputType.SEARCH}
                width={344}
                name="search"
                placeholder="Пошук"
                showRemark={false}
              />
            </Box>
            <Divider orientation="vertical" sx={styles.divider} />
            <Box>
              <IconButton
                onClick={() => handleOrderChange(values)}
                shape={IconButtonShape.SQUARE}
                color={IconButtonColor.SECONDARY}
                size={IconButtonSize.LARGE}
                icon={
                  values.order === 'asc' ? (
                    <BarsArrowDownIcon />
                  ) : (
                    <BarsArrowUpIcon />
                  )
                }
              />
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default TeachersAdminSearch;
