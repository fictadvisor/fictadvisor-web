import { FC } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import IconButton from '@/components/icon-button-mui/IconButton';
import {
  IconButtonColor,
  IconButtonShape,
  IconButtonSize,
  VariantIconButtonProps,
} from '@/components/icon-button-mui/types';

const CloseButton: FC<VariantIconButtonProps> = ({
  size = IconButtonSize.LARGE,
  shape = IconButtonShape.SQUARE,
  color = IconButtonColor.TRANSPARENT,
  onClick,
  disabled,
}) => {
  return (
    <IconButton
      icon={<XMarkIcon />}
      size={size}
      shape={shape}
      color={color}
      onClick={onClick}
      disabled={disabled}
    />
  );
};
export default CloseButton;
