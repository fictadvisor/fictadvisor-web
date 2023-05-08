import React, { FC } from 'react';

import { StyledTooltip } from './Tooltip.styles';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  text: string;
  hasArrow?: boolean;
  position?: TooltipPosition;
  children?: React.ReactElement;
}
const Tooltip: FC<TooltipProps> = ({
  text,
  hasArrow = true,
  position = 'bottom',
  children,
}) => {
  return (
    <StyledTooltip title={text} arrow={hasArrow} placement={position}>
      {children}
    </StyledTooltip>
  );
};

export default Tooltip;
