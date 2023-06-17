import { DropDownOption } from '@/components/common/ui/form/dropdown/Dropdown';
import { RegisterBody } from '@/lib/api/auth/types/RegisterBody';
import { Group } from '@/lib/api/group/types/GetAllResponse';

import { RegisterFormFields } from '../types';

export const transformData = (data: RegisterFormFields): RegisterBody => {
  const transformedData: RegisterBody = {
    student: {
      groupId: data.group,
      firstName: data.firstName.trim().replace('`', `'`).replace('ʼ', `'`),
      middleName: data.middleName?.trim().replace('`', `'`).replace('ʼ', `'`),
      lastName: data.lastName.trim().replace('`', `'`).replace('ʼ', `'`),
      isCaptain: data.isCaptain,
    },
    user: {
      username: data.username,
      email: data.email.toLowerCase(),
      password: data.password,
    },
  };

  return transformedData;
};

export const transformGroups = (
  data: Group[],
): DropDownOption[] =>
  data.map(group => ({
    label: group.code,
    value: group.id,
  }));
