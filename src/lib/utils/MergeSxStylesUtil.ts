import { SxProps, Theme } from '@mui/material/styles';

export const withSxProp = (
  other: SxProps<Theme>,
  sxProp: SxProps<Theme> | undefined,
): SxProps<Theme> => {
  if (!sxProp) {
    return other;
  } else {
    return mergeSx(other, sxProp);
  }
};
//used while merging sx from props and inner styles
//return <Box sx={withSxProp(parentSxProp, sxChildDefault)}>

export const mergeSx = (...sxProps: SxProps<Theme>[]): SxProps<Theme> => {
  return sxProps.reduce((prev, currentValue) => {
    return [
      ...(Array.isArray(prev) ? prev : [prev]),
      ...(Array.isArray(currentValue) ? currentValue : [currentValue]),
    ];
  }, [] as SxProps<Theme>);
};

//used while merging two sx from inner styles
//<Box sx={mergeSx(innerSx1, innerSx2)} />
