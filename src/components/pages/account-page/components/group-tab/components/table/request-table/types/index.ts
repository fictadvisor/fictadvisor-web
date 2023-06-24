import { QueryObserverBaseResult } from 'react-query';

// TODO: compare to similar types
export interface RequestTableItem {
  imgSrc?: string;
  fullName: string;
  email: string;
  id: string;
}

export interface StudentTableProps {
  rows: RequestTableItem[];
  refetch: QueryObserverBaseResult['refetch'];
}
