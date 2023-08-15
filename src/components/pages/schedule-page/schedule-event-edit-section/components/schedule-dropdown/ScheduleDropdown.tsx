import React, { FC, ReactNode, useState } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

import { Dropdown } from '@/components/common/ui/form';
import { DropDownOption } from '@/components/common/ui/form/dropdown/types';

import * as styles from './ScheduleDropdown.styles';

export interface ScheduleDropdownProps {
  options: DropDownOption[];
  placeholder?: string;
  isDisabled?: boolean;
  icon?: ReactNode;
  noOptionsText?: string;
  sx?: SxProps<Theme>;
  onChange: (value: string) => void;
  value: string;
  width?: string;
  disableClearable?: boolean;
}

const ScheduleDropdown: FC<ScheduleDropdownProps> = ({
  options,
  placeholder,
  isDisabled,
  icon,
  noOptionsText,
  onChange,
  value,
  width,
  disableClearable,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(icon ? true : false);
  };
  return (
    <Dropdown
      options={options}
      value={value}
      label=""
      placeholder={placeholder}
      onChange={onChange}
      onInputChange={handleInputChange}
      inputSx={styles.input(
        inputValue || value ? true : false,
        icon ? true : false,
      )}
      dropdownSx={styles.dropdown}
      isDisabled={isDisabled}
      icon={icon}
      hasPopup={false}
      noOptionsText={noOptionsText}
      width={width}
      disableClearable={disableClearable}
    />
  );
};

export default ScheduleDropdown;
