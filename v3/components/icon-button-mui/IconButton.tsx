import React, { forwardRef } from 'react';
import { Box, Button } from '@mui/material';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './IconButton.styles';
import {
  IconButtonColor,
  IconButtonProps,
  IconButtonShape,
  IconButtonSize,
} from './types';

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButtonComponent(
    {
      sx = {},
      icon,
      iconSx = {},
      shape = IconButtonShape.SQUARE,
      color = IconButtonColor.PRIMARY,
      size = IconButtonSize.NORMAL,
      ...rest
    },
    ref,
  ) {
    return (
      <Button
        ref={ref}
        sx={mergeSx(styles.button(shape, color, size), sx)}
        disableRipple
        {...rest}
      >
        <Box sx={mergeSx(styles.iconStyles(size), iconSx)}>{icon}</Box>
      </Button>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
