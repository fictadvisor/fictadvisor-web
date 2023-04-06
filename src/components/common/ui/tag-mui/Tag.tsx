import React, { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import { withSxProp } from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './Tag.styles';

export type TagColorType =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'secondary'
  | 'violet'
  | 'mint'
  | 'orange';

interface TagProps {
  text: string;
  size?: 'medium' | 'small';
  color?: TagColorType;
  variant?: 'fill' | 'outline' | 'darker';
  icon?: ReactNode;
  sx?: SxProps<Theme>;
}
const Tag: FC<TagProps> = ({
  text,
  variant = 'fill',
  color = 'primary',
  size = 'medium',
  icon,
  sx,
}) => {
  return (
    <Box sx={withSxProp(sx, styles.tag(variant, color, size, icon))}>
      {icon && <Box sx={styles.icon}>{icon}</Box>}
      <p>{text}</p>
    </Box>
  );
};

export default Tag;
