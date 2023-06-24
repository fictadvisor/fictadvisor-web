import { QueryObserverBaseResult } from 'react-query';

import { UserGroupRole } from '@/types/user';

// TODO: compare similar types
export interface StudentTableItem {
  imgSrc?: string;
  fullName: string;
  role: UserGroupRole;
  email: string;
  id: string;
}

export interface StudentTableProps {
  rows: StudentTableItem[];
  variant: UserGroupRole;
  refetch: QueryObserverBaseResult['refetch'];
}
