import React, { FC } from 'react';

import Dropdown from '@/components/common/ui/form/dropdown';
import { DropdownProps } from '@/components/common/ui/form/dropdown/types';
import FormikDropdown, {
  FormikDropdownProps,
} from '@/components/common/ui/form/with-formik/dropdown/FormikDropdown';

import * as styles from './ScheduleDropdown.styles';

export const ScheduleFormikDropdown: FC<FormikDropdownProps> = props => {
  return (
    <FormikDropdown
      {...props}
      label={''}
      placeholder={'Оберіть викладача'}
      dropdownSx={styles.dropdown}
      inputSx={styles.input()}
      showRemark={false}
    />
  );
};

export const ScheduleDropdown: FC<DropdownProps> = props => {
  return (
    <Dropdown
      {...props}
      label={''}
      dropdownSx={styles.dropdown}
      inputSx={styles.input()}
      showRemark={false}
    />
  );
};
export default ScheduleDropdown;
