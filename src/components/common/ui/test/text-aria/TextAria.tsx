import { FC } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './TextAria.styles';
import { TextAriaSize } from './types';

interface TextAriaProps {
  placeholder: string;
  size: TextAriaSize;
  sx?: SxProps<Theme>;
}

const TextAria: FC<TextAriaProps> = ({
  size = TextAriaSize.NORMAL,
  sx = {},
  placeholder = 'Text Aria',
}) => {
  return (
    <TextField
      variant="standard"
      margin="normal"
      sx={mergeSx(styles.textAria(size), sx)}
      placeholder={placeholder}
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
