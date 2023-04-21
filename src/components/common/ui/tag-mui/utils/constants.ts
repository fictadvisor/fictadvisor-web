import { TagColorType } from '@/components/common/ui/tag-mui/Tag';

const ColorMap: Record<TagColorType, string[]> = {
  primary: ['primary.300', 'primary.200', 'primary.300'],
  success: ['success.400', 'success.300', 'success.700'],
  error: ['error.400', 'error.300', 'error.500'],
  warning: ['warning.400', 'warning.200', 'warning.400'],
  info: ['info.300', 'info.50', 'info.300'],
  secondary: ['gray.300', 'backgroundDark.200', 'gray.300'],
  violet: ['violet.300', 'violet.400', 'violet.600'],
  mint: ['mint.600', 'mint.400', 'mint.600'],
  orange: ['orange.600', 'orange.400', 'orange.600'],
};

const VariantIndexMap = {
  fill: 0,
  darker: 1,
  outline: 2,
};
const colorInfo = (color, variant) => {
  const index = VariantIndexMap[variant];
  return ColorMap[color][index];
};
export default colorInfo;
