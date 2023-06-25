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
  const maxStarsNumber = variant === RatingVariant.LONG ? 5 : 1;
  const number = variant === RatingVariant.LONG ? rating : rating / 5;
  const precision = variant === RatingVariant.LONG ? 0.1 : 0.02;
  return (
    <Box sx={mergeSx(styles.rating, sx)}>
      {variant === RatingVariant.SHORT && <Box>{rating}</Box>}
      <RatingMui
        value={number}
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
      {variant === RatingVariant.LONG && <Box>{rating}</Box>}
    </Box>
  );
};

export default Rating;
