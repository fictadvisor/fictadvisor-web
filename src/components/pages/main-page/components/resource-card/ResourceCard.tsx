import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import * as styles from './ResourceCard.styles';
interface CardProps {
  text: string;
  image: string;
  href: string;
}

const ResourceCard: React.FC<CardProps> = ({
  text = 'FICT Time',
  image,
  href,
}) => {
  return (
    <Link href={href}>
      <Box sx={styles.card}>
        <Box sx={styles.cardContent}>
          <Image
            width={100}
            height={100}
            quality={100}
            src={image}
            alt="student resource"
          />
          <Typography sx={styles.text}>{text}</Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default ResourceCard;
