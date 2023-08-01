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
  region: string;
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

export interface HelperData {
  entrantHasForeignPassport: boolean;
  entrantHasOldPassport: boolean;
  isAdult: boolean;
  hasNoMiddleName: boolean;
  representativeHasNoMiddleName: boolean;
  entrantHasNoMiddleName: boolean;
  representativeHasNoCode: boolean;
  entrantHasNoCode: boolean;
}
export interface ContractBody {
  entrant: PersonalData;
  representative: PersonalData;
  meta: MetaContract;
  helper: HelperData;
}

export interface AdminContractData {
  contractNumber: string;
  contractDate: string;
  firstName: string;
  lastName: string;
  middleName: string;
  speciality: string;
}
