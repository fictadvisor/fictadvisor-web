import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

import Button from '@/components/common/ui/button-mui';
import { Checkbox } from '@/components/common/ui/form';
import useAuthentication from '@/hooks/use-authentication';
import { UserAPI } from '@/lib/api/user/UserAPI';

import * as styles from './OpenedSelective.styles';
import { transformData } from './utils';

interface OpenedSelectiveProps {
  semester: 1 | 2;
  year: number;
  onSubmit: () => void;
}

const semesterMap = {
  1: 'I',
  2: 'II',
};

const OpenedSelective: FC<OpenedSelectiveProps> = ({
  semester,
  year,
  onSubmit,
}) => {
  const disciplines = ['asd1', 'asd2', 'asd3', 'asd4']; //useQuery instead
  const initialValues = {};
  disciplines.forEach(discipline => (initialValues[discipline] = false));
  const { user } = useAuthentication();
  const handleSubmit = async data => {
    await UserAPI.postSelectiveDisciplines(user.id, transformData(data));
    onSubmit();
  };

  return (
    <Box sx={styles.wrapper}>
      <Typography
        variant="h6Bold"
        sx={styles.text}
      >{`${semesterMap[semester]} семестр ${year}`}</Typography>
      <Typography variant="h6Bold" sx={styles.text}>
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
