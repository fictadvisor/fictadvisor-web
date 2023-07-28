export enum StudyTypeParam {
  CONTRACT = 'Контракт',
  BUDGET = 'Бюджет',
}

export enum StudyFormParam {
  FULL_TIME = 'Денна',
  PART_TIME = 'Заочна',
}

export enum PaymentTypeParam {
  EVERY_QUARTER = 'Щоквартально',
  EVERY_SEMESTER = 'Щосеместрово',
}

interface PersonalData {
  firstName: string;
  middleName?: string;
  lastName: string;
  passportSeries?: string;
  passportNumber: string;
  passportInstitute: string;
  passportDate: string;
  address: string;
  settlement: string;
  idCode?: string;
  phoneNumber: string;
  email: string;
  index: string;
}

interface MetaContract {
  speciality: string;
  studyType: string;
  studyForm: string;
  paymentType?: string;
  isToAdmission: boolean;
}

export interface ContractBody {
  entrant: PersonalData;
  representative?: PersonalData;
  meta: MetaContract;
}
