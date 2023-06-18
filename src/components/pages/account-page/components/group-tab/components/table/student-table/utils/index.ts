import { RequestTableItem } from '@/components/pages/account-page/components/group-tab/components/table/request-table/RequestTable';
import { StudentTableItem } from '@/components/pages/account-page/components/group-tab/components/table/student-table/StudentTable';
import { UserGroupRole } from '@/types/user';

export const transformStudentsData = (data): StudentTableItem[] =>
  data.map(dataItem => ({
    imgSrc: dataItem.avatar,
    fullName: `${dataItem.lastName} ${dataItem.firstName} ${dataItem.middleName}`,
    role: dataMapper[dataItem.group.role],
    email: dataItem.email,
    id: dataItem.id,
  }));

export const transformRequestsData = (data): RequestTableItem[] =>
  data.map(dataItem => ({
    imgSrc: dataItem.avatar,
    fullName: `${dataItem.lastName} ${dataItem.firstName} ${dataItem.middleName}`,
    email: dataItem.email,
    id: dataItem.id,
  }));

export const dataMapper: Record<UserGroupRole, string | null> = {
  [UserGroupRole.CAPTAIN]: 'Староста',
  [UserGroupRole.MODERATOR]: 'Зам. старости',
  [UserGroupRole.STUDENT]: null,
};

export default dataMapper;
