import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

import Button from '@/components/common/ui/button-mui';
import { Checkbox } from '@/components/common/ui/form';

import * as styles from './OpenedSelective.styles';

interface OpenedSelectiveProps {
  userId: string;
  semester: 1 | 2;
  year: string;
  onSubmit: () => void;
}

const semesterMap = {
  1: 'I',
  2: 'II',
};

const OpenedSelective: FC<OpenedSelectiveProps> = ({
  userId,
  semester,
  year,
  onSubmit,
}) => {
  const disciplines = ['asd1', 'asd2', 'asd3', 'asd4']; //useQuery instead
  const initialValues = {};
  disciplines.forEach(discipline => (initialValues[discipline] = false));
  const handleSubmit = data => {
    console.log(userId, data);
    onSubmit();
  };

  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h6">{`${semesterMap[semester]} семестр ${year}`}</Typography>
      <Typography variant="h6">
        Обери предмети, які є твоїми вибірковими на цей семестр
      </Typography>
      <Formik initialValues={{ ...initialValues }} onSubmit={handleSubmit}>
        <Form>
          <Box sx={styles.disciplines}>
            {disciplines.map(discipline => (
              <Checkbox
                key={discipline}
                name={discipline}
                label={discipline}
                sx={styles.checkbox}
              />
            ))}
          </Box>
          <Button
            size="small"
            text="Зберегти"
            type="submit"
            sx={styles.button}
          />
        </Form>
      </Formik>
    </Box>
  );
};

export default OpenedSelective;
