import React, { FC, ReactNode, useState } from 'react';

import { Dropdown } from '@/components/common/ui/form';
import { DropDownOption } from '@/components/common/ui/form/dropdown/types';

import * as styles from './ScheduleDropdown.styles';

export interface ScheduleDropdownProps {
  options: DropDownOption[];
  placeholder?: string;
  isDisabled?: boolean;
  icon?: ReactNode;
  noOptionsText?: string;
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <Dropdown
      options={options}
      value={value}
      label=""
      placeholder={placeholder}
      onChange={onChange}
      onInputChange={handleInputChange}
      inputSx={styles.input(!!(inputValue || value), !!icon)}
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
