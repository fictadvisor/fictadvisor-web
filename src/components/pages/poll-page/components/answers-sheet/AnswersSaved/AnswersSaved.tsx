import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button-mui/Button';
import { ButtonVariant } from '@/components/common/ui/button-mui/types';
import theme from '@/styles/theme';

import * as styles from './AnswerSaved.style';

const AnswersSaved = () => {
  const router = useRouter();
  const isMobileMedium = useMediaQuery(theme.breakpoints.down('mobileMedium'));

  return (
    <Box sx={styles.savedWrapper}>
      <Box sx={styles.content}>
        <Image src="/gifs/frogging.gif" alt="frog" width={90} height={90} />
        <Typography
          variant={isMobileMedium ? 'h4Bold' : 'h3SemiBold'}
          sx={styles.heading}
        >
          Дякуємо за відповіді!
        </Typography>
        <Typography
          variant={isMobileMedium ? 'body1Medium' : 'h6Medium'}
          sx={styles.paragraph}
        >
          Ваші відповіді допоможуть покращити якість навчання на нашому
          факультеті. Також Ви можете оцінити інших викладачів.
        </Typography>
        <Box sx={styles.buttons}>
          <Button
            sx={styles.toOtherPolls}
            text={'Пройти нове опитування'}
            type="submit"
            onClick={() => router.push('/poll')}
          />
          <Button
            sx={styles.toMain}
            text={'Повернутись на головну'}
            type="submit"
            variant={ButtonVariant.OUTLINE}
            onClick={() => router.push('/')}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AnswersSaved;
