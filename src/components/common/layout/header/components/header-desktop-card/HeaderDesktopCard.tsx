import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import * as styles from './HeaderDesktopCard.styles';

interface HeaderCardProps {
  name: string;
  groupName: string;
  position: string;
  url: string;
}

const HeaderDesktopCard: FC<HeaderCardProps> = ({
  name,
  groupName,
  position,
  url,
}) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.cardInfo}>
        <Typography variant="body1Medium" sx={styles.name}>
          {name}
        </Typography>
        <Box>
          <Typography variant="overline">{position}</Typography>
          {groupName && (
            <Box component="span" sx={styles.groupName}>
              {groupName}
            </Box>
          )}
        </Box>
      </Box>
      <Box
        component="img"
        src={url}
        alt="Картинка профілю"
        style={{ borderRadius: '100%' }}
      />
    </Box>
  );
};

export default HeaderDesktopCard;
