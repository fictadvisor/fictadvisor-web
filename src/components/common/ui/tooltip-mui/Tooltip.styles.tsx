import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    p: '4px 12px',
    textAlign: 'center',
    borderRadius: '4px',
    backgroundColor: '#FFE0E0',
    color: '#151515',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#FFE0E0',
  },
}));
