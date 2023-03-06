import React from 'react';
import Link from 'next/link';

import styles from './ResourceCard.module.scss';

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
      <div className={styles['card']}>
        <div className={styles['card-content']}>
          <img src={image} />
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;