import { Stack } from '@mui/system';

import Checkbox from '@/components/common/ui/form/checkbox/Checkbox';
import { CheckboxColor } from '@/components/common/ui/form/checkbox/types';

import * as styles from './CheckBoxSection.styles';

export const CheckBoxSection = () => {
  return (
    <>
      <Stack sx={styles.checkboxes}>
        <Checkbox
          label={'Мої вибіркові'}
          name={'selective'}
          color={CheckboxColor.PRIMARY}
        />
        <Checkbox
          label={'Лекція'}
          name={'lection'}
          color={CheckboxColor.LECTURE}
        />
        <Checkbox
          label={'Практика'}
          name={'practice'}
          color={CheckboxColor.PRACTICE}
        />
        <Checkbox
          label={'Лабораторна'}
          name={'laboratory'}
          color={CheckboxColor.LAB}
        />
        <Checkbox
          label={'Інша подія'}
          name={'other'}
          color={CheckboxColor.EVENT}
        />
      </Stack>
    </>
  );
};
