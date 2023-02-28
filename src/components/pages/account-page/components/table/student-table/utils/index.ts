import { StudentTableItem } from '@/components/pages/account-page/components/table/student-table/StudentTable';

export const transformData = (data): StudentTableItem[] =>
  data.map(dataItem => ({
    imgSrc: dataItem.avatar,
    fullName: `${dataItem.firstName} ${dataItem.lastName} ${dataItem.middleName}`,
    role: dataMapper[dataItem.group.role],
    email: dataItem.email,
    value: dataItem.id,
  }));

const dataMapper = {
  ['CAPTAIN']: 'Староста',
  ['MODERATOR']: 'Зам. старости',
  ['STUDENT']: null,
};
