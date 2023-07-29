import * as yup from 'yup';

export const representativeValidationSchema = yup.object().shape({
  representative: yup
    .object()
    .optional()
    .nullable()
    .shape({
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
      phoneNumber: yup
        .string()
        .required(`Обов'язкове поле`)
        .matches(
          /^[+][(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
          'Має починатися з символу "+" і коду країни ',
        ),
      email: yup
        .string()
        .required(`Обов'язкове поле`)
        .email('Це не схоже на поштову адресу'),
      passportSeries: yup
        .string()
        .optional()
        .matches(/^[A-Z]{2}$/, 'Має бути 2 великі латинські літери'),
      passportNumber: yup.number().required(`Обов'язкове поле`),
      passportDate: yup
        .string()
        .required(`Обов'язкове поле`)
        .matches(
          /^\s*((?:3[01]|[12][0-9]|0[1-9])\.(1[012]|0[1-9])\.((?:19|20)\d{2}))\s*$/,
          'Має бути формату dd.mm.yyyy',
        ),
      passportInstitute: yup.string().required(`Обов'язкове поле`),
      idCode: yup
        .string()
        .optional()
        .max(10, 'Лише 10 цифр')
        .matches(/(\d{10})/, 'Лише 10 цифр'),
      region: yup.string().required(`Обов'язкове поле`),
      settlement: yup
        .string()
        .required(`Обов'язкове поле`)
        .matches(
          /^[ҐЄІЇЬА-ЩЮЯґєіїьа-щюя0-9\-`ʼ',. ]+$/,
          'Має містити українські літери, апостроф або дефіс',
        ),
      address: yup
        .string()
        .required(`Обов'язкове поле`)
        .matches(
          /^[ҐЄІЇЬА-ЩЮЯґєіїьа-щюя0-9\-`ʼ',. ]+$/,
          'Має містити українські літери, апостроф або дефіс',
        ),
      index: yup
        .string()
        .required(`Обов'язкове поле`)
        .max(5, 'Лише 5 цифр')
        .matches(/(\d{5})/, 'Лише 5 цифр'),
    }),
});

export const entrantValidationSchema = yup.object().shape({
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
    phoneNumber: yup
      .string()
      .required(`Обов'язкове поле`)
      .matches(
        /^[+][(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
        'Має починатися з символу "+" і коду країни ',
      ),
    email: yup
      .string()
      .required(`Обов'язкове поле`)
      .email('Це не схоже на поштову адресу'),
    passportSeries: yup
      .string()
      .optional()
      .matches(/^[A-Z]{2}$/, 'Має бути 2 великі латинські літери'),
    passportNumber: yup.number().required(`Обов'язкове поле`),
    passportDate: yup
      .string()
      .required(`Обов'язкове поле`)
      .matches(
        /^\s*((?:3[01]|[12][0-9]|0[1-9])\.(1[012]|0[1-9])\.((?:19|20)\d{2}))\s*$/,
        'Має бути формату dd.mm.yyyy',
      ),
    passportInstitute: yup.string().required(`Обов'язкове поле`),
    idCode: yup
      .string()
      .optional()
      .max(10, 'Лише 10 цифр')
      .matches(/(\d{10})/, 'Лише 10 цифр'),
    region: yup.string().required(`Обов'язкове поле`),
    settlement: yup
      .string()
      .required(`Обов'язкове поле`)
      .matches(
        /^[ҐЄІЇЬА-ЩЮЯґєіїьа-щюя0-9\-`ʼ',. ]+$/,
        'Має містити українські літери, апостроф або дефіс',
      ),
    address: yup
      .string()
      .required(`Обов'язкове поле`)
      .matches(
        /^[ҐЄІЇЬА-ЩЮЯґєіїьа-щюя0-9\-`ʼ',. ]+$/,
        'Має містити українські літери, апостроф або дефіс',
      ),
    index: yup
      .string()
      .required(`Обов'язкове поле`)
      .max(5, 'Лише 5 цифр')
      .matches(/(\d{5})/, 'Лише 5 цифр'),
  }),
});
