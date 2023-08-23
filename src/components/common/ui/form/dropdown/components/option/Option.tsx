import { FC, HTMLProps } from 'react';

import { DropDownOption } from '../../types';

interface OptionProps extends HTMLProps<HTMLLIElement> {
  option: DropDownOption;
}

import Tag from '@/components/common/ui/tag-mui';
import { TagSize } from '@/components/common/ui/tag-mui/types';

const Option: FC<OptionProps> = ({ option, ...props }) => {
  if ('text' in option) {
    return (
      <span {...props}>
        <Tag {...option} size={TagSize.SMALL} />
      </span>
    );
  } else {
    return <span {...props}>{option.label}</span>;
  }
};

export default Option;
