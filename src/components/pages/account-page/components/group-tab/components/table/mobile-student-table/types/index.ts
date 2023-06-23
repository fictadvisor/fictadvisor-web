import {
  StudentRole
} from '@/components/pages/account-page/components/group-tab/components/table/student-table/StudentTable';
import { QueryObserverBaseResult } from 'react-query';

// TODO: compare to similar types and unite
export interface StudentTableItem {
  imgSrc?: string;
  fullName: string;
  role: string;
  email: string;
  id: string;
}

export interface StudentTableProps {
  rows: StudentTableItem[];
  variant: StudentRole;
  refetch: QueryObserverBaseResult['refetch'];
}
