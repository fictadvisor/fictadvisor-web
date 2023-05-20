import React, { FC } from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material';

const Progress: FC<CircularProgressProps> = props => {
  return <CircularProgress {...props} />;
};
export default Progress;
