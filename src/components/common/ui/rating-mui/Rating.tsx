import { FC } from 'react';
import { Icon, Rating as MuiRating, SxProps, Theme } from '@mui/material';

interface RatingProps {
  rating: number;
  sx?: SxProps<Theme>;
}

const Rating: FC<RatingProps> = ({ rating, sx }) => {
  return (
    <MuiRating
      value={rating}
      sx={sx}
      precision={0.1}
      emptyIcon={
        <Icon>
          <img src="/icons/stars-empty.svg" />
        </Icon>
      }
      icon={
        <Icon>
          <img src="/icons/stars-full.svg" />
        </Icon>
      }
      readOnly
    />
  );
};

export default Rating;
