import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  entrant: yup.object().shape({
    lastName: yup
      .string()
      .required(`Обов'язкове поле`)
      .min(2, 'Не коротше 2 символів')
      .max(40, 'Не довше 40 символів')
      .matches(
        /^[ҐЄІЇЬА-ЩЮЯґєіїьа-щюя\-`ʼ' ]+$/,
        'Має містити українські літери, апостроф або дефіс',
      ),
    firstName: yup
      .string()
      .required(`Обов'язкове поле`)
      .min(2, 'Не коротше 2 символів')
      .max(40, 'Не довше 40 символів')
      .matches(
        /^[ҐЄІЇЬА-ЩЮЯґєіїьа-щюя\-`ʼ' ]+$/,
        'Має містити українські літери, апостроф або дефіс',
      ),
    middleName: yup
      .string()
      .min(2, 'Не коротше 2 символів')
      .max(40, 'Не довше 40 символів')
      .matches(
        /^[ҐЄІЇЬА-ЩЮЯґєіїьа-щюя\-`ʼ' ]+$/,
        'Має містити українські літери, апостроф або дефіс',
      ),
  }),
  specialty: yup.string().required(),
  email: yup
    .string()
    .required(`Обов'язкове поле`)
    .email('Це не схоже на поштову адресу'),
  day: yup.string().required(`Обов'язкове поле`),
  priorities: yup.object().shape({
    1: yup.string().required(`Обов'язкове поле`),
    2: yup.string().required(`Обов'язкове поле`),
    3: yup.string().when('specialty', {
      is: '126',
      then: schema => schema.required(`Обов'язкове поле`),
      otherwise: schema => schema.optional(),
    }),
  }),
});
