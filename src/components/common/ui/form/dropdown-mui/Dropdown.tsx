/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Box, Popper, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

import { FieldState } from '@/components/common/ui/form/common/types';

import { dropdown, input, popper, remark } from './Dropdown.styles';

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
  size?: `${DropDownSize}`;
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
  onChange,
}) => {
  const inpRef = useRef<HTMLElement | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');
  const popperRef = useRef<HTMLElement | null>(null);
  const [filteredOptions, setFilteredOptions] = useState<number>(
    options!.length,
  );

  const [{}, { touched, error }, { setTouched, setValue }] = useField(name);

  let state = FieldState.DEFAULT;
  if (isDisabled) state = FieldState.DISABLED;
  else if (touched && error) state = FieldState.ERROR;
  else if (touched && isSuccessOnDefault) state = FieldState.SUCCESS;

  const handleChange = (_: any, option: DropDownOption) => {
    setTouched(true);

    setValue(option ? option.id : '');
    if (option !== null && onChange) onChange();
  };

  useEffect(() => {
    const ul = popperRef.current?.querySelector('ul');
    if (ul) {
      const num = ul.children.length;
      setFilteredOptions(num);
    }
  }, [inputValue]);

  const CustomPopper = useCallback(
    props => {
      if (isDisabled) return <></>;
      else
        return (
          <Popper
            {...props}
            anchorEl={inpRef.current}
            placement="bottom"
            modifiers={[{ name: 'flip', enabled: false }]}
            ref={popperRef}
            sx={popper(
              filteredOptions < numberOfOptions
                ? filteredOptions
                : numberOfOptions,
              36,
            )}
          />
        );
    },
    [filteredOptions],
  );

  return (
    <Box>
      <Autocomplete
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
        }}
        ref={inpRef}
        sx={dropdown}
        fullWidth
        disablePortal
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        getOptionLabel={(opt: DropDownOption) => opt.label}
        renderInput={params => (
          <TextField
            {...params}
            label={label}
            sx={input(isFocused, state, size)}
            placeholder={placeholder}
            disabled={isDisabled}
          />
        )}
        PopperComponent={CustomPopper}
        popupIcon={<ChevronDownIcon width={24} height={24} strokeWidth={1.5} />}
        noOptionsText={noOptionsText}
      />
      {showRemark && (
        <Typography sx={remark(state)}>
          {touched && error ? error : defaultRemark}
        </Typography>
      )}
    </Box>
  );
};
