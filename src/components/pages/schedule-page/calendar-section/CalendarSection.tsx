import type { FC } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

import Button from '@/components/common/ui/button-mui/Button';

import styles from './calendar-section.module.scss';
export const CalendarSection: FC<any> = ({}) => {
  return (
    <section className={styles['calendar-section']}>
      <Button
        sx={{ maxWidth: '350px' }}
        text={'Додати подію'}
        // color = 'primary',
        variant={'outline'}
        // size="large"
        startIcon={<PlusIcon />}
      />
    </section>
  );
};
