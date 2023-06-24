import { RequestTableItem } from '@/components/pages/account-page/components/group-tab/components/table/request-table/types';
import { StudentTableItem } from '@/components/pages/account-page/components/group-tab/components/table/student-table/types';
import { GroupStudent, PendingStudent } from '@/types/student';
import { UserGroupRole } from '@/types/user';

export const transformStudentsData = (
  data: GroupStudent[],
): StudentTableItem[] =>
  data.map(dataItem => ({
    imgSrc: dataItem.avatar,
    fullName: `${dataItem.lastName} ${dataItem.firstName} ${dataItem.middleName}`,
    role: dataItem.group.role,
    email: dataItem.email,
    id: dataItem.id,
  }));

export const transformRequestsData = (
  data: PendingStudent[],
): RequestTableItem[] =>
  data.map(dataItem => ({
    imgSrc: dataItem.avatar,
    fullName: `${dataItem.lastName} ${dataItem.firstName} ${dataItem.middleName}`,
    email: dataItem.email,
    id: dataItem.id,
  }));
