import { FormikValues } from 'formik';

export const preparePriorityData = (values: FormikValues) => {
  if (values.specialty === '126') {
    values.priorities[1] = '';
    values.priorities[2] = '';
  }
  if (values.specialty === '121') {
    values.priorities[1] = '';
    values.priorities[2] = '';
    values.priorities[3] = '';
  }
  if (values.isToAdmission) {
    values.email = '';
  }
};
