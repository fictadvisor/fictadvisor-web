import { DropDownOption } from '@/components/common/ui/form/dropdown/types';
import { AdminSearchFormFields } from '@/components/pages/admin/teachers-admin-page/components/teachers-admin-search/types';

export const initialValues: AdminSearchFormFields = {
  search: '',
  sort: 'lastName',
  order: 'asc',
};

export const tags: DropDownOption[] = [
  {
    label: 'Лекції',
    id: 'lecture',
  },
  {
    label: 'Практики',
    id: 'practice',
  },
  {
    label: 'Лабораторні',
    id: 'laboratory',
  },
];
