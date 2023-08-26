import { FormEvent, Fragment, useEffect, useRef } from 'react';
import { Stack } from '@mui/system';
import { Form, Formik, FormikProps } from 'formik';

import { CheckboxColor } from '@/components/common/ui/form/checkbox/types';
import Checkbox from '@/components/common/ui/form/with-formik/checkbox';
import useAuthentication from '@/hooks/use-authentication';
import { Checkboxes, useSchedule } from '@/store/schedule/useSchedule';

import * as styles from './CheckBoxSection.styles';

export const CheckBoxSection = () => {
  const [setIsSelective, updateDisciplineTypes, groupId, checkboxes] =
    useSchedule(state => [
      state.setIsSelective,
      state.updateDisciplineTypes,
      state.groupId,
      state.checkboxes,
    ]);

  const { user } = useAuthentication();

  useEffect(() => {
    if (!user || user.group?.id !== groupId)
      useSchedule.setState(state => ({
        checkboxes: {
          ...state.checkboxes,
          isSelective: false,
          otherEvents: false,
        },
      }));
  }, [groupId]);

  const handleValuesChange = (event: FormEvent<HTMLFormElement>) => {
    const name = (event.target as HTMLInputElement).name as keyof Checkboxes;
    const values = form?.current?.values as Checkboxes;

    useSchedule.setState(state => ({
      checkboxes: values,
    }));

    if (name === 'isSelective') {
      setIsSelective(!!values?.isSelective);
      return;
    }

    const vals = { ...values };
    delete vals.isSelective;

    updateDisciplineTypes(vals);
  };

  const form = useRef<FormikProps<Checkboxes>>(null);

  return (
    <Formik initialValues={checkboxes} onSubmit={() => {}} innerRef={form}>
      <Form
        onChange={event => setTimeout(() => handleValuesChange(event), 0)}
        style={{ alignSelf: 'flex-start' }}
      >
        <Stack sx={styles.checkboxes}>
          {user && user.group?.id === groupId && (
            <Fragment>
              <Checkbox
                label={'Інша подія'}
                name={'otherEvents'}
                color={CheckboxColor.EVENT}
              />
              <Checkbox
                label={'Мої вибіркові'}
                color={CheckboxColor.PRIMARY}
                name={'isSelective'}
              />
            </Fragment>
          )}
          <Checkbox
            label={'Лекція'}
            name={'addLecture'}
            color={CheckboxColor.LECTURE}
          />
          <Checkbox
            label={'Практика'}
            name={'addPractice'}
            color={CheckboxColor.PRACTICE}
          />
          <Checkbox
            label={'Лабораторна'}
            name={'addLaboratory'}
            color={CheckboxColor.LAB}
          />
        </Stack>
      </Form>
    </Formik>
  );
};
