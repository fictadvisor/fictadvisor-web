import { QueryObserverBaseResult } from 'react-query';

// TODO: check other similar types and move them to one place
export interface RequestTableItem {
  imgSrc?: string;
  fullName: string;
  email: string;
  id: string;
}

export interface RequestTableProps {
  rows: RequestTableItem[];
  refetch: QueryObserverBaseResult['refetch'];
}
