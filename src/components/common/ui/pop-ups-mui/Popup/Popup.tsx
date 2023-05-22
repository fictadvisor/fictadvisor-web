import React, { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './Popup.styles';
interface PopupProps {
  children?: React.ReactNode;
  onClose: () => void;
  open: boolean;
  sx?: SxProps<Theme>;
}

const Popup: FC<PopupProps> = ({ open, onClose, children, sx }) => {
  return (
    <Dialog sx={mergeSx(styles.popup, sx)} open={open} onClose={onClose}>
      {children}
    </Dialog>
  );
};

export default Popup;
