import { FC, SyntheticEvent } from 'react';
import { useMemo, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Box, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

import { FieldState } from '@/components/common/ui/form/common/types';

import type { TagProps } from '../../tag-mui/Tag';
import Tag from '../../tag-mui/Tag';

import * as styles from './Dropdown.styles';

interface OptionBase {
  id: string;
}
interface DropDownTextOption extends OptionBase {
  label: string;
}

interface DropDownTagOption extends OptionBase, TagProps {}

type DropDownOption = DropDownTagOption | DropDownTextOption;

interface DropdownProps {
  options: readonly DropDownTextOption[] | readonly DropDownTagOption[];
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
}

export enum DropDownSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export const Dropdown: FC<DropdownProps> = ({
  options,
  label = 'АНУ ТИЦЬНУВ',
  placeholder = 'МОЛОДЧИНА! Тепер піди поспи солдат',
  noOptionsText = 'Опції відсутні',
  isSuccessOnDefault = false,
  defaultRemark,
  showRemark,
  size = DropDownSize.MEDIUM,
  isDisabled = false,
  name,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [values, { touched, error }, { setTouched, setValue }] = useField(name);

  const dropdownState = useMemo(() => {
    if (isDisabled) return FieldState.DISABLED;
    else if (touched && error) return FieldState.ERROR;
    else if (touched && isSuccessOnDefault) return FieldState.SUCCESS;
    else return FieldState.DEFAULT;
  }, [touched, error]);

  const handleChange = (_: SyntheticEvent, option: DropDownOption) => {
    setTouched(true);
    setValue(option?.id || '');
  };

  return (
    <Box sx={styles.dropdown(36)}>
      <Autocomplete
        disabled={isDisabled}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        fullWidth
        disablePortal
        onChange={handleChange}
        blurOnSelect={true}
        options={options}
        renderInput={params => (
          <TextField
            {...values}
            {...params}
            label={label}
            sx={styles.input(dropdownState, size)}
            placeholder={placeholder}
            disabled={isDisabled}
          />
        )}
        getOptionLabel={option =>
          'text' in option ? option.text : option.label
        }
        componentsProps={{
          popper: {
            placement: 'bottom',
            modifiers: [{ name: 'flip', enabled: false }],
          },
        }}
        popupIcon={<ChevronDownIcon width={24} height={24} strokeWidth={1.5} />}
        noOptionsText={noOptionsText}
        renderOption={(props, option: DropDownOption) => {
          console.log(option);
          if ('text' in option) {
            return (
              <span {...props}>
                <Tag {...option} />
              </span>
            );
          } else {
            return <span {...props}>{option.label}</span>;
          }
        }}
      />
      {showRemark && (
        <Typography sx={styles.getRemarkStyles(dropdownState, isFocused)}>
          {touched && error ? error : defaultRemark}
        </Typography>
      )}
    </Box>
  );
};
