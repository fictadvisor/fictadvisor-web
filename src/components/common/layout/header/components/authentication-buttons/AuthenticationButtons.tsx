import { FC } from 'react';
import { Box, Link } from '@mui/material';

import { ButtonSize, ButtonVariant } from '@/components/common/ui/button';
import Button from '@/components/common/ui/button-mui';

import * as styles from './AuthenticationButtons.styles';

const AuthenticationButtons: FC = () => {
  return (
    <Box sx={styles.authenticationButtons}>
      <Link
        href="/register"
        sx={styles.registerButton}
        underline="none"
        color="inherit"
      >
        <Button
          text="Зареєструватись"
          size={ButtonSize.SMALL}
          variant={ButtonVariant.OUTLINE}
        />
      </Link>
      <Link
        href="/login"
        sx={styles.loginButton}
        underline="none"
        color="inherit"
      >
        <Button
          text="Увійти"
          size={ButtonSize.SMALL}
          variant={ButtonVariant.FILLED}
        />
      </Link>
    </Box>
  );
};

export default AuthenticationButtons;
