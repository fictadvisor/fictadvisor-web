import React, { ChangeEvent, useRef, useState } from 'react';
import {
  Box,
  FormControl,
  FormHelperText,
  OutlinedInput,
  useMediaQuery,
} from '@mui/material';

import LineNumbers from '@/components/common/ui/form/numbered-text-area-mui/components';
import { transformValue } from '@/components/common/ui/form/numbered-text-area-mui/utils';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';
import theme from '@/styles/theme';

import * as styles from './NumberedTextArea.styles';
import { NumberedTextAreaProps } from './types';

const MAX_LENGTH = 2000;
const MOBILE_ROWS = 7;
const DESKTOP_ROWS = 10;

const NumberedTextArea: React.FC<NumberedTextAreaProps> = ({
  placeholder,
  disabled = false,
  showRemark = false,
  sx = {},
  error,
}) => {
  const [input, setInput] = useState('');
  const [touched, setTouched] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('mobileMedium'));

  const handleScroll = (event: React.UIEvent<HTMLTextAreaElement>) => {
    const { currentTarget } = event;
    if (lineRef.current) {
      lineRef.current.scrollTop = currentTarget.scrollTop;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = transformValue(event.target.value);
    setInput(formattedValue);
    if (formattedValue.trim() === '') {
      setTouched(true);
    } else {
      setTouched(false);
    }
  };
  const state = touched && error ? 'error' : 'default';

  return (
    <Box sx={mergeSx(styles.wrapper, sx)}>
      <FormControl sx={styles.formControl(state, disabled)} disabled={disabled}>
        <LineNumbers value={input} ref={lineRef} />

        <OutlinedInput
          sx={styles.input}
          rows={isMobile ? MOBILE_ROWS : DESKTOP_ROWS}
          multiline
          inputProps={{
            maxLength: MAX_LENGTH,
            onScroll: handleScroll,
          }}
          value={input}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </FormControl>
      {showRemark && (
        <FormHelperText sx={styles.errorRemark}>
          {touched && error}
        </FormHelperText>
      )}
    </Box>
  );
};

export default NumberedTextArea;
