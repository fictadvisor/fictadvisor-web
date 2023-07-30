import { FormikValues } from 'formik';

export const optionalFieldsPrepare = (
  values: FormikValues,
  state: {
    isAdult: boolean;
    entrantHasNoMiddleName: boolean;
    representativeHasNoMiddleName: boolean;
    entrantHasForeignPassport: boolean;
    representativeHasForeignPassport: boolean;
    entrantRefusedCode: boolean;
    representativeRefusedCode: boolean;
    entrantHasOldPassport: boolean;
    representativeHasOldPassport: boolean;
  },
) => {
  if (values.meta.studyType === 'Бюджет') {
    values.meta['paymentType'] = '';
  }
  if (state.isAdult) {
    Object.keys(values.representative).forEach(key => {
      values.representative[key] = '';
    });
  }
  if (state.entrantHasNoMiddleName) {
    values.entrant['middleName'] = '';
  }
  if (state.representativeHasNoMiddleName) {
    values.representative['middleName'] = '';
  }
  if (state.entrantRefusedCode) {
    values.entrant['idCode'] = '';
  }
  if (state.representativeRefusedCode) {
    values.representative['idCode'] = '';
  }
  if (!state.entrantHasOldPassport && !state.entrantHasForeignPassport) {
    values.entrant['passportSeries'] = '';
  }
  if (
    !state.representativeHasOldPassport &&
    !state.representativeHasForeignPassport
  ) {
    values.representative['passportSeries'] = '';
  }
};
