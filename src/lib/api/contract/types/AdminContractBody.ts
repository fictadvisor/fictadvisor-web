import { Fullname } from '@/types/contract';

export interface PersonalEntrantData extends Fullname {
  specialty: string;
}

export interface ContractAdminBody {
  number: string;
  date: string;
}

export interface AdminContractBody {
  entrant: PersonalEntrantData;
  contract: ContractAdminBody;
}
