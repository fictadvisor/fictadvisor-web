import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Обовʼязкове поле')
    .min(2, 'Не коротше 2 символів')
    .max(100, 'Не довше 100 символів'),
  type: yup.string().required(`Обов'язкове поле`),
  teacher: yup.string().required(`Обов'язкове поле`),
  startTime: yup
    .string()
    .required('Обовʼязкове поле')
    .matches(
      /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
      'Неправильний формат часу',
    ),
  endTime: yup
    .string()
    .required('Обовʼязкове поле')
    .matches(
      /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
      'Неправильний формат часу',
    ),
  date: yup
    .string()
    .required('Обовʼязкове поле')
    .matches(
      /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,
      'Неправильний формат дати',
    ),
  period: yup.string(),
  url: yup.string().required(`Обов'язкове поле`),
  eventInfo: yup.string().max(2000, 'Не довше 2000 символів'),
  disciplineInfo: yup.string().max(2000, 'Не довше 2000 символів'),
});
