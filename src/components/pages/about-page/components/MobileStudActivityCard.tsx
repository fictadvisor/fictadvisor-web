import React, { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface MobileStudActivityCardProps {
  title: string;
  description: ReactNode;
  imgSrc?: string;
}

const MobileStudActivityCard: FC<MobileStudActivityCardProps> = ({
  title,
  description,
  imgSrc,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="320px"
      position="relative"
    >
      <img
        src={imgSrc}
        style={{
          borderRadius: '12px',
          margin: '0 16px',
          position: 'absolute',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          borderRadius: '12px',
          background: '#151515',
          alignItems: 'flex-start',
          padding: imgSrc ? '120px 20px 20px 20px' : '16px',
        }}
      >
        <Typography variant="body2Bold">{title}</Typography>
        {description}
      </Box>
    </Box>
  );
};
export default MobileStudActivityCard;
