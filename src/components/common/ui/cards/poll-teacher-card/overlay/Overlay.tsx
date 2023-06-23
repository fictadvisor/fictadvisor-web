import { FC, MouseEvent, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Backdrop, Box } from '@mui/material';
import { Typography } from '@mui/material';

import Button from '@/components/common/ui/button-mui';
import IconButton from '@/components/common/ui/icon-button-mui';

import * as styles from './overlay.style';
interface OverlayProps {
  open: boolean;
  onBackdropClick: () => void;
}
export const Overlay: FC<OverlayProps> = ({ open, onBackdropClick }) => {
  const clickHandler = (event: MouseEvent) => {
    if ((event.target as HTMLDivElement) == backdrop.current) {
      onBackdropClick();
    }
  };

  const handleTeacherSkip = () => {};

  const backdrop = useRef<HTMLDivElement>(null);
  return (
    <Backdrop
      open={open}
      sx={styles.backdrop}
      onClick={clickHandler}
      ref={backdrop}
    >
      <Box sx={styles.box}>
        <Box sx={styles.title}>
          <Typography>Пропустити опитування</Typography>
          <IconButton
            icon={<XMarkIcon />}
            color="transparent"
            onClick={onBackdropClick}
          />
        </Box>
        <Typography>
          Хто тримає цей район? Пес Патрон, пес Патрон Хто крутіший за iPhone?
          Пес Патрон, пес Патрон Хто не ходить на газон? Пес Патрон, пес Патрон
          В розмінуванні чемпіон Пес Патрон, пес Патрон
        </Typography>
        <Box sx={styles.footer}>
          <Button
            text={'Лишити лектора'}
            size={'small'}
            variant="outline"
            onClick={onBackdropClick}
          />
          <Button
            text={'Пропустити'}
            size={'small'}
            onClick={handleTeacherSkip}
          />
        </Box>
      </Box>
    </Backdrop>
  );
};
