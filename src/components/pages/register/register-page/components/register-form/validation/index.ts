import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required(`Обов'язкове поле`)
    .min(2, 'Не коротше 2 символів')
    .max(40, 'Не довше 40 символів')
    .matches(/^\w+$/, 'Має містити латинські літери, цифри або знак _'),
  firstName: yup
    .string()
    .required(`Обов'язкове поле`)
    .min(2, 'Не коротше 2 символів')
    .max(40, 'Не довше 40 символів')
    .matches(
      /^[ҐЄІЇЬА-ЩЮЯґєіїьа-щюя\-' ]+$/,
      'Має містити українські літери, апостроф або дефіс',
    ),
  lastName: yup
    .string()
    .required(`Обов'язкове поле`)
    .min(2, 'Не коротше 2 символів')
    .max(40, 'Не довше 40 символів')
    .matches(
      /^[ҐЄІЇЬА-ЩЮЯґєіїьа-щюя\-' ]+$/,
      'Має містити українські літери, апостроф або дефіс',
    ),
  middleName: yup
    .string()
    .min(2, 'Не коротше 2 символів')
    .max(40, 'Не довше 40 символів')
    .matches(
      /^[ҐЄІЇЬА-ЩЮЯґєіїьа-щюя\-' ]+$/,
      'Має містити українські літери, апостроф або дефіс',
    ),
  email: yup
    .string()
    .required(`Обов'язкове поле`)
    .email('Це не схоже на пошту'),
  group: yup.string().required(`Обов'язкове поле`),
  password: yup
    .string()
    .required(`Обов'язкове поле`)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[\w\W]+$/,
      'Мінімум одна літера та одна цифра',
    ),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Паролі не збігаються')
    .required(`Обов'язкове поле`),
  agreement: yup.boolean().isTrue(''),
});

export const Ria = yup.object().shape({
  createPassword: yup
    .string()
    .required('Не коротше 8 символів, мінімум одна літера та одна цифра')
    .min(8, 'Не коротше 8 символів')
    .max(50, 'Пароль занадто довгий')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[\w\W]+$/,
      'Мінімум одна літера та одна цифра',
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('createPassword'), null], 'Паролі не збігаються')
    .required('Це поле не може бути пустим'),
});

export const reference = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be at least 8 characters')
    .max(16, 'Password is too long')
    .matches(/(?=.*[0-9])/, 'Password must contain at least one number')
    .matches(
      /(?=.*[a-z])/,
      'Password must contain at least one lowercase letter',
    )
    .matches(
      /(?=.*[A-Z])/,
      'Password must contain at least one uppercase letter',
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
});