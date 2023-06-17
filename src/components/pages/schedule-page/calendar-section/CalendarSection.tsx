import type { FC } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Form, Formik } from 'formik';

import Button from '@/components/common/ui/button-mui/Button';
import { Dropdown } from '@/components/common/ui/form/dropdown-mui/Dropdown';

import { DatePicker } from './date-picker/DatePicker';
import { TabSection } from './tabs-section/TabSection';

import styles from './calendar-section.module.scss';
export const CalendarSection: FC<any> = ({}) => {
  return (
    <section className={styles['calendar-section']}>
      <Button
        sx={{ maxWidth: '330px' }}
        text={'Додати подію'}
        variant={'outline'}
        startIcon={<PlusIcon />}
      />
      <Formik
        validateOnMount
        validateOnChange
        initialValues={{}}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form
          style={{
            width: '90%',
            display: 'flex',
            gap: '24px',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TabSection />
          <Dropdown
            width={'min(300px,100%)'}
            placeholder="NO LABEL MFCKRS"
            options={[{ label: 'l1', id: 'id1' }]}
            name="teacherId1"
            showRemark
            label="Група"
          />
          <DatePicker />
        </Form>
      </Formik>
    </section>
  );
};
