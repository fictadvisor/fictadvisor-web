import * as yup from 'yup';

export const representativeValidation = yup.object().shape({
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
      phoneNumber: yup.string().required(`Обов'язкове поле`),
      email: yup
        .string()
        .required(`Обов'язкове поле`)
        .email('Це не схоже на поштову адресу'),
      passportSeries: yup.string().optional(),
      passportNumber: yup.number().required(`Обов'язкове поле`),
      passportDate: yup.string().required(`Обов'язкове поле`),
      passportInstitute: yup.string().required(`Обов'язкове поле`),
      idCode: yup.string().required(`Обов'язкове поле`),
      settlement: yup.string().required(`Обов'язкове поле`),
      address: yup.string().required(`Обов'язкове поле`),
      index: yup.string().required(`Обов'язкове поле`),
    }),
});

export const entrantValidation = yup.object().shape({
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
    phoneNumber: yup.string().required(`Обов'язкове поле`),
    email: yup
      .string()
      .required(`Обов'язкове поле`)
      .email('Це не схоже на поштову адресу'),
    passportSeries: yup.string().optional(),
    passportNumber: yup.number().required(`Обов'язкове поле`),
    passportDate: yup
      .string()
      .required(`Обов'язкове поле`)
      .matches(
        /^\s*((?:3[01]|[12][0-9]|0[1-9])\.(1[012]|0[1-9])\.((?:19|20)\d{2}))\s*$/,
        'Має бути формату dd.mm.yyyy',
      ),
    passportInstitute: yup.string().required(`Обов'язкове поле`),
    idCode: yup.string().required(`Обов'язкове поле`),
    settlement: yup.string().required(`Обов'язкове поле`),
    address: yup.string().required(`Обов'язкове поле`),
    index: yup.string().required(`Обов'язкове поле`),
  }),

  // meta: yup.object().shape({
  //   studyType: yup.string().trim().required(`Обов'язкове поле`),
  //   studyForm: yup.string().required(`Обов'язкове поле`),
  //   paymentType: yup.string().optional(),
  //   speciality: yup.string().required(`Обов'язкове поле`),
  //   isToAdmission: yup.boolean().optional(),
  // }),
});
