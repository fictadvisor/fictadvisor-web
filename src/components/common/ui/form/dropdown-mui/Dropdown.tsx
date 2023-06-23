import { FC, SyntheticEvent } from 'react';
import { useMemo, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Box, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

import {
  FieldSize,
  FieldState,
} from '@/components/common/ui/form/common/types';

import Option from './components/option';
import * as styles from './Dropdown.styles';
import { DropDownOption, DropdownProps } from './types';

export const Dropdown: FC<DropdownProps> = ({
  options,
  label = 'АНУ ТИЦЬНУВ',
  placeholder = 'МОЛОДЧИНА! Тепер піди поспи солдат',
  noOptionsText = 'Опції відсутні',
  isSuccessOnDefault = false,
  defaultRemark,
  showRemark,
  size = FieldSize.MEDIUM,
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
  }, [isDisabled, touched, error, isSuccessOnDefault]);

  const handleChange = (_: SyntheticEvent, option: DropDownOption | null) => {
    setTouched(true);
    setValue(option?.id || '', true);
  };

  return (
    <Box sx={styles.dropdown}>
      <Autocomplete
        disabled={isDisabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        fullWidth
        disablePortal
        onChange={handleChange}
        blurOnSelect={true}
        options={options}
        renderInput={params => (
          <TextField
            {...params}
            inputProps={values}
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
            placement: 'bottom-start',
            modifiers: [
              { name: 'flip', enabled: false },
              {
                name: 'preventOverflow',
                options: {
                  mainAxis: false,
                },
              },
              {
                name: 'sameWidth',
                enabled: true,
                fn: ({ state }) => {
                  state.styles.popper.width = `${state.rects.reference.width}px`;
                },
                phase: 'beforeWrite',
                requires: ['computeStyles'],
              },
            ],
          },
        }}
        popupIcon={<ChevronDownIcon width={24} height={24} strokeWidth={1.5} />}
        noOptionsText={noOptionsText}
        renderOption={(props, option: DropDownOption) => (
          <Option {...props} option={option} key={option.id} />
        )}
      />
      {showRemark && (
        <Typography sx={styles.remark(dropdownState, isFocused)}>
          {touched && error ? error : defaultRemark}
        </Typography>
      )}
    </Box>
  );
};
