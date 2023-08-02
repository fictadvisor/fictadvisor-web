import { DropDownOption } from '@/components/common/ui/form/dropdown/types';
import { PriorityData } from '@/lib/api/contract/types/ContractBody';

export const initialValues: PriorityData = {
  firstName: '',
  lastName: '',
  middleName: '',
  email: '',
  specialty: '',
  day: '',
  isToAdmission: false,
  priorities: {
    1: '',
    2: '',
    3: '',
  },
};

export const IPeduPrograms: DropDownOption[] = [
  {
    label: "Інженерія програмного забезпечення комп'ютерних систем",
    id: 'one',
  },
  {
    label: 'Інженерія програмного забезпечення інформаційних систем',
    id: 'two',
  },
];
export const ISTeduPrograms: DropDownOption[] = [
  {
    label: 'Інформаційне забезпечення робототехнічних систем',
    id: 'one',
  },
  {
    label: 'Інтегровані інформаційні системи',
    id: 'two',
  },
  {
    label: 'Інформаційні управляючі системи та технології',
    id: 'third',
  },
];
