import React from 'react';
import Link from 'next/dist/client/link';
import { LinkProps } from 'next/link';

import styles from './Link.module.scss';

type CustomLinkProps = {
  text: string;
} & LinkProps;
const CustomLink: React.FC<CustomLinkProps> = ({ text, ...rest }) => {
  return (
    <Link className={styles['link']} {...rest}>
      {text}
    </Link>
  );
};

export default CustomLink;
