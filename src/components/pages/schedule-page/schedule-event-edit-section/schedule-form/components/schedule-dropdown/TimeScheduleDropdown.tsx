import React, { FC, useEffect } from 'react';
import dayjs from 'dayjs';
import { useField } from 'formik';

import Dropdown from '@/components/common/ui/form/dropdown';
import { FormikDropdownProps } from '@/components/common/ui/form/with-formik/dropdown/FormikDropdown';

import { getDateWithTimeSetted } from '../../utils/getDateWithTimeSetted';

import * as styles from './ScheduleDropdown.styles';

interface TimeScheduleDropdownProps extends FormikDropdownProps {
  date: dayjs.Dayjs;
}

export const TimeScheduleDropdown: FC<TimeScheduleDropdownProps> = ({
  clearOnUnmount,
  name,
  date,
  ...props
}) => {
  const [{ value }, { touched, error }, { setValue, setTouched }] =
    useField(name);

  React.useEffect(() => {
    if (date) {
      setValue(getDateWithTimeSetted(date, value));
    }
  }, [date]);

  const onChange = (option: string) => {
    setTouched(true);
    setValue(option);
  };

  return (
    <Dropdown
      {...props}
      value={value}
      touched={touched}
      error={error}
      showRemark={!!error}
      dropdownSx={styles.dropdown}
      inputSx={styles.input()}
      onChange={onChange}
      label={''}
      remarkSx={styles.remark}
    />
  );
};
