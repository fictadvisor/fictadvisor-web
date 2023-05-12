/* eslint-disable react/prop-types */
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import type { PopperProps } from '@mui/material';
import { Box, Popper, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

import { FieldState } from '@/components/common/ui/form/common/types';

import * as styles from './Dropdown.styles';

interface DropDownOption {
  label: string;
  id: string;
}

interface DropdownProps {
  options: DropDownOption[];
  label?: string;
  name?: string;
  isDisabled?: boolean;
  placeholder?: string;
  numberOfOptions?: number;
  isSuccessOnDefault?: boolean;
  defaultRemark?: string;
  showRemark?: boolean;
  size?: DropDownSize;
  noOptionsText?: string;
  onChange?: () => void;
}

export enum DropDownSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  label = 'АНУ ТИЦЬНУВ',
  placeholder = 'МОЛОДЧИНА! Тепер піди поспи солдат',
  noOptionsText = 'Опції відсутні',
  numberOfOptions = 4,
  isSuccessOnDefault = false,
  defaultRemark,
  showRemark,
  size = DropDownSize.MEDIUM,
  isDisabled = false,
  name,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const popperRef = useRef<HTMLDivElement>(null);
  const [filteredOptions, setFilteredOptions] = useState<number>(
    options.length,
  );

  const [values, { touched, error }, { setTouched, setValue, setError }] =
    useField(name);

  const dropdownState = useMemo(() => {
    if (isDisabled) return FieldState.DISABLED;
    else if (touched && error) return FieldState.ERROR;
    else if (touched && isSuccessOnDefault) return FieldState.SUCCESS;
    else return FieldState.DEFAULT;
  }, [touched, error]);

  const handleChange = (_: any, option: DropDownOption) => {
    setTouched(true);
    setValue(option ? option.id : '');
    setError(null);
  };

  useEffect(() => {
    const ul = popperRef.current?.querySelector('ul');
    if (ul) {
      const num = ul.children.length;
      setFilteredOptions(num);
    }
  }, [popperRef.current?.querySelector('ul')?.children.length]);

  const CustomPopper = memo(function CustomPopper(props: PopperProps) {
    if (isDisabled) return <></>;
    else
      return (
        <Popper
          {...props}
          anchorEl={inputRef.current}
          placement="bottom"
          modifiers={[{ name: 'flip', enabled: false }]}
          ref={popperRef}
          sx={styles.getPopperStyles(
            Math.min(filteredOptions, numberOfOptions),
            36,
          )}
        />
      );
  });

  return (
    <Box>
      <Autocomplete
        onFocus={() => {
          setIsFocused(true);
          // debugger;
        }}
        onBlur={() => {
          setIsFocused(false);
          // debugger;
        }}
        ref={inputRef}
        sx={styles.dropdown}
        fullWidth
        disablePortal
        onChange={handleChange}
        blurOnSelect={true}
        options={options}
        getOptionLabel={(opt: DropDownOption) => opt.label}
        renderInput={params => (
          <TextField
            {...values}
            {...params}
            label={label}
            sx={styles.input(isFocused, dropdownState, size)}
            placeholder={placeholder}
            disabled={isDisabled}
          />
        )}
        PopperComponent={CustomPopper}
        popupIcon={<ChevronDownIcon width={24} height={24} strokeWidth={1.5} />}
        noOptionsText={noOptionsText}
      />
      {showRemark && (
        <Typography sx={styles.getRemarkStyles(dropdownState, isFocused)}>
          {touched && error ? error : defaultRemark}
        </Typography>
      )}
    </Box>
  );
};
