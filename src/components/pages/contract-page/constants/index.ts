import {
  ContractBody,
  PaymentTypeParam,
  StudyFormParam,
  StudyTypeParam,
} from '@/lib/api/contract/types/ContractBody';

export const initialValues: ContractBody = {
  entrant: {
    firstName: '',
    middleName: '',
    lastName: '',
    passportSeries: '',
    passportNumber: '',
    passportInstitute: '',
    passportDate: '',
    address: '',
    settlement: '',
    idCode: '',
    phoneNumber: '',
    email: '',
  },
  representative: {
    firstName: '',
    middleName: '',
    lastName: '',
    passportSeries: '',
    passportNumber: '',
    passportInstitute: '',
    passportDate: '',
    address: '',
    settlement: '',
    idCode: '',
    phoneNumber: '',
    email: '',
  },
  meta: {
    studyType: StudyTypeParam.BUDGET,
    studyForm: StudyFormParam.FULL_TIME,
    paymentType: PaymentTypeParam.EVERY_SEMESTER,
    speciality: '121',
    isToAdmission: false,
  },
};
