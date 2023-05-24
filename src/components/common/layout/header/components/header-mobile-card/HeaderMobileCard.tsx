import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import mergeClassNames from 'merge-class-names';

import * as styles from './HeaderMobileCard.styles';

interface HeaderMobileCardProps {
  name: string;
  groupName: string;
  position: string;
  url?: string;
}

const HeaderMobileCard: FC<HeaderMobileCardProps> = ({
  name,
  groupName,
  position,
  url,
}) => {
  return (
    <Box sx={styles.headerCardContainer}>
      <Box sx={styles.headerCardInfo}>
        <Box
          component="img"
          src={url}
          alt="Картинка профілю"
          style={{ borderRadius: '100%' }}
        />
        <Box sx={{ marginLeft: '8px' }}>
          <Typography variant="body1Medium" color="grey.600">
            {name}
          </Typography>
          <Box sx={{ marginTop: '8px', gap: '8px' }}>
            {groupName && (
              <Box component="span" sx={styles.headerCardGroupName}>
                {groupName}
              </Box>
            )}
            <Box component="span" sx={styles.headerCardPosition}>
              {position}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderMobileCard;
