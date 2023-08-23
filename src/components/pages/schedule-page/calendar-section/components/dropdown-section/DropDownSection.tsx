import React, { FC } from 'react';

import { useSchedule } from '@/store/schedule/useSchedule';
import { Group } from '@/types/group';

import Dropdown from '../../../../../common/ui/form/dropdown';
export interface DropDownSectionProps {
  groups: Group[];
}
export const DropDownSection: FC<DropDownSectionProps> = ({ groups }) => {
  const { setGroupId, groupId } = useSchedule(state => ({
    setGroupId: state.setGroupId,
    groupId: state.groupId,
  }));
  return (
    <Dropdown
      width={'calc(280px - 16px)'}
      options={
        groups
          ? groups?.map(group => ({
              id: group.id,
              label: group.code,
            }))
          : []
      }
      label="Група"
      showRemark={false}
      onChange={id => setGroupId(id)}
      value={groupId}
      disableClearable
    />
  );
};
