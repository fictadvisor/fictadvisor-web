import { FC } from 'react';
import { SxProps } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Theme } from '@mui/system';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './TextArea.styles';
import { TextAreaSize } from './types';

interface TextAreaProps {
  placeholder: string;
  size: TextAreaSize;
  sx?: SxProps<Theme>;
}

const TextArea: FC<TextAreaProps> = ({
  size = TextAreaSize.NORMAL,
  sx = {},
  placeholder = 'Text Area',
}) => {
  return (
    <TextField
      variant="standard"
      margin="normal"
      sx={mergeSx(styles.textArea(size), sx)}
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

export default TextArea;
