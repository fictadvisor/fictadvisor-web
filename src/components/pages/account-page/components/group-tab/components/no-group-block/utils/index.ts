import { DropDownOption } from '@/components/common/ui/form/dropdown/Dropdown';
import { Group } from '@/types/group';

export const transformGroups = (groups: Group[]): DropDownOption[] =>
  groups.map(group => ({
    label: group.code,
    value: group.id,
  }));
