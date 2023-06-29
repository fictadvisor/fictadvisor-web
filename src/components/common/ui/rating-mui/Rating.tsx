import { FC } from 'react';
import { Box, Icon, Rating as RatingMui, SxProps, Theme } from '@mui/material';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './Rating.styles';

export enum RatingVariant {
  LONG = 'long',
  SHORT = 'short',
}
interface RatingProps {
  rating: number;
  variant?: RatingVariant;
  sx?: SxProps<Theme>;
}

const Rating: FC<RatingProps> = ({
  rating,
  variant = RatingVariant.LONG,
  sx,
}) => {
  const isLongVariant = variant === RatingVariant.LONG;
  const maxStarsNumber = isLongVariant ? 5 : 1;
  const value = isLongVariant ? rating : rating / 5;
  const ratingText = isLongVariant ? rating.toFixed(2) : rating.toFixed(1);
  const precision = 0.1;
  return (
    <Box sx={mergeSx(styles.rating(variant), sx)}>
      {!isLongVariant && <Box>{ratingText}</Box>}
      <RatingMui
        value={value}
        sx={styles.ratingStars}
        precision={precision}
        max={maxStarsNumber}
        emptyIcon={
          <Icon>
            <img src="/icons/stars-empty.svg" alt="stars" />
          </Icon>
        }
        icon={
          <Icon>
            <img src="/icons/stars-full.svg" alt="stars" />
          </Icon>
        }
        readOnly
      />
      {isLongVariant && <Box>{ratingText}</Box>}
    </Box>
  );
};

export default Rating;
