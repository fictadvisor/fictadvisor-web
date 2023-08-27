import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button';

import * as styles from './LogoRegisterBlock.styles';

const LogoRegisterBlock = () => {
  const { push } = useRouter();

  return (
    <Box sx={styles.logoRegisterBlock}>
      <Link href="/">
        <Image
          style={{ margin: 0, padding: '8px' }}
          src="/images/login-page/new-logo.png"
          alt="fict advisor logo"
          priority
          width={300}
          height={54}
        />
      </Link>
      <Typography variant="h3" sx={styles.registerText}>
        Ти ще не з нами? Приєднуйся!
      </Typography>
      <Button
        style={{ maxWidth: '300px' }}
        text="Зареєструватися"
        onClick={() => {
          void push('/register');
        }}
      />
    </Box>
  );
};

export default LogoRegisterBlock;
