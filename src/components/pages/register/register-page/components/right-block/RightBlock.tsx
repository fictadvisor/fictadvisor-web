import mergeClassNames from 'merge-class-names';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button';

import styles from './RightBlock.module.scss';
import Image from "next/image";
import React from "react";

const RightBlock = () => {
  const { push } = useRouter();

  return (
    <div className={styles['left-block']}>
      <Link href="/">
        <Image
            className={styles['login-logo']}
            src="/images/login-page/new-logo.png"
            alt="fict advisor logo"
            width={300}
            height={54}
        />
      </Link>
      <h3 className={mergeClassNames(styles['login-text'])}>
        Вже маєш акаунт? Заходь!
      </h3>
      <Button
        className={styles['login-button']}
        text="Вхід"
        onClick={() => {
          void push('/login');
        }}
      />
    </div>
  );
};

export default RightBlock;
