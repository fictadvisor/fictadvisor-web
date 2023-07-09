import type { FC } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Box, Stack } from '@mui/material';
import { Form, Formik } from 'formik';

import Button from '@/components/common/ui/button-mui/Button';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';

import { CheckBoxSection } from './components/checkboxes-section/CheckBoxSection';
import { DatePicker } from './components/date-picker/DatePicker';
import { TabSection } from './components/tabs-section/TabSection';
import * as styles from './CalendarSection.styles';

export const CalendarSection: FC<never> = () => {
  return (
    <Box sx={styles.mainWrapper}>
      <Formik
        validateOnMount
        validateOnChange
        initialValues={{}}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Box sx={styles.sticky}>
          <Form>
            <Stack sx={styles.wrapper}>
              <Button
                text={'Додати подію'}
                variant={ButtonVariant.OUTLINE}
                startIcon={<PlusIcon />}
                size={ButtonSize.SMALL}
              />
              <TabSection />
              <DatePicker />
              <CheckBoxSection />
            </Stack>
          </Form>
        </Box>
      </Formik>
    </Box>
  );
};
