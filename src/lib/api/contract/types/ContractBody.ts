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

interface PersonalAdminData {
  firstName: string;
  middleName: string;
  lastName: string;
  specialty: string;
}

interface ContractAdminData {
  number: string;
  date: string;
}

export interface AdminContractData {
  entrant: PersonalAdminData;
  contract: ContractAdminData;
}
