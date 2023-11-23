import React, { FC, useCallback, useState } from 'react';
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from '@heroicons/react/24/outline';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';

import { Input, InputSize, InputType } from '@/components/common/ui/form';
import {
  IconButtonColor,
  IconButtonShape,
} from '@/components/common/ui/icon-button';
import IconButton from '@/components/common/ui/icon-button-mui';
import { initialValues } from '@/components/pages/admin/teachers-admin-page/components/teachers-admin-search/constants';
import { AdminSearchFormFields } from '@/components/pages/admin/teachers-admin-page/components/teachers-admin-search/types';

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
    if (values.order === 'asc') {
      setOrder('desc');
    } else {
      setOrder('asc');
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ values }) => (
        <Form>
          <Input
            value={values.search}
            onChange={() => onSubmit(values)}
            size={InputSize.LARGE}
            type={InputType.SEARCH}
            name="search"
            placeholder="Пошук"
            showRemark={false}
          />
          <Box>
            <IconButton
              onClick={() => handleOrderChange(values)}
              shape={IconButtonShape.SQUARE}
              color={IconButtonColor.SECONDARY}
              icon={
                values.order === 'asc' ? (
                  <BarsArrowDownIcon />
                ) : (
                  <BarsArrowUpIcon />
                )
              }
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default TeachersAdminSearch;
