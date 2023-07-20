import { FC } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './TextAria.styles';
import { TextAriaSize } from './types';

interface TextAriaProps {
  value: string;
  size: TextAriaSize;
  sx?: SxProps<Theme>;
}

const TextAria: FC<TextAriaProps> = ({
  size = TextAriaSize.NORMAL,
  sx = {},
  value = 'Text Aria',
}) => {
  return (
    <TextField
      variant="standard"
      margin="normal"
      sx={mergeSx(styles.textAria(size), sx)}
      placeholder={value}
      multiline
      rows={5}
      maxRows={5}
      InputProps={{
        disableUnderline: true,
      }}
    />
  );
};

export default TextAria;
