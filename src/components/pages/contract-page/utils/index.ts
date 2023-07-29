import { FormikValues } from 'formik';

export const clearRepresentative = (representative: object) => {};
export const optionalFieldsPrepare = (
  values: FormikValues,
  state: {
    isAdult: boolean;
    entrantHasNoMiddleName: boolean;
    representativeHasNoMiddleName: boolean;
    entrantRefusedCode: boolean;
    representativeRefusedCode: boolean;
    entrantHasOldPassport: boolean;
    representativeHasOldPassport: boolean;
  },
) => {
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
  if (!state.entrantHasOldPassport) {
    values.entrant['passportSeries'] = '';
  }
  if (!state.representativeHasOldPassport) {
    values.representative['passportSeries'] = '';
  }
};
