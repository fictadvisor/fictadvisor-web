import { FC, ReactNode } from 'react';
import { Link as MuiLink } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './Link.styles';
interface LinkProps {
  href: string;
  text: string | ReactNode;
  sx?: SxProps<Theme>;
  type?: 'white' | 'blue';
}
const Link: FC<LinkProps> = ({ href, text, sx, type = 'white' }) => {
  return (
    <MuiLink href={href} sx={mergeSx(styles.LinkStyles(type), sx)}>
      {text}
    </MuiLink>
  );
};

export default Link;
