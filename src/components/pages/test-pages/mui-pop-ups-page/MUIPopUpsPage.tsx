import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';

import Button from '@/components/common/ui/button-mui';
import Popup from '@/components/common/ui/pop-ups-mui/Popup';
import PopupsActions from '@/components/common/ui/pop-ups-mui/PopupActions';
import PopupsContent from '@/components/common/ui/pop-ups-mui/PopupContent';
import PopupsTitle from '@/components/common/ui/pop-ups-mui/PopupTitle';

import * as styles from './MUIPopUpsPage.styles';
const PopUpsPage = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  return (
    <>
      <div>
        <Button
          text="Open form dialog 1"
          size="large"
          onClick={handleClickOpen1}
        />
        <Popup open={open1} onClose={handleClose1}>
          <PopupsTitle sx={styles.popupsTitle}>
            <Box sx={styles.checkCircleIcon}>
              <CheckCircleIcon />
            </Box>
            <Typography sx={styles.popupsTitleText}>
              Application Received
            </Typography>
          </PopupsTitle>
          <PopupsContent sx={styles.popupsContent}>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </PopupsContent>
          <PopupsActions>
            <Button
              text="Post"
              size="small"
              variant={'outline'}
              onClick={handleClose1}
            />
            <Button
              text="Post"
              size="small"
              onClick={handleClose1}
              sx={styles.leftButton}
            />
          </PopupsActions>
        </Popup>
      </div>

      <div>
        <Button
          text="Open form dialog 2"
          size="large"
          onClick={handleClickOpen2}
        />
        <Popup open={open2} onClose={handleClose2}>
          <PopupsTitle sx={styles.popupsTitle}>
            <Box sx={styles.checkCircleIcon}>
              <CheckCircleIcon />
            </Box>
            <Typography sx={styles.popupsTitleText}>
              Application Received
            </Typography>
          </PopupsTitle>
          <PopupsContent sx={styles.popupsContent}>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </PopupsContent>
          <PopupsActions>
            <Button text="Post" size="small" onClick={handleClose2} />
          </PopupsActions>
        </Popup>
      </div>

      <div>
        <Button
          text="Open form dialog 3"
          size="large"
          onClick={handleClickOpen3}
        />
        <Popup open={open3} onClose={handleClose3}>
          <PopupsTitle
            withCross={true}
            onClose={handleClose3}
            sx={styles.popupsTitle}
          >
            <Box sx={styles.checkCircleIcon}>
              <CheckCircleIcon />
            </Box>
            <Typography sx={styles.popupsTitleText}>
              Application Received
            </Typography>
          </PopupsTitle>
          <PopupsContent sx={styles.popupsContent}>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </PopupsContent>
          <PopupsActions>
            <Button
              text="Post"
              size="small"
              variant={'outline'}
              onClick={handleClose3}
            />
            <Button
              text="Post"
              size="small"
              onClick={handleClose3}
              sx={styles.leftButton}
            />
          </PopupsActions>
        </Popup>
      </div>

      <div>
        <Button
          text="Open form dialog 4"
          size="large"
          onClick={handleClickOpen4}
        />
        <Popup open={open4} onClose={handleClose4} sx={styles.popup}>
          <PopupsTitle withCross={true} onClose={handleClose4}>
            <Typography sx={styles.popupsTitleTextLeft}>
              Application Received
            </Typography>
          </PopupsTitle>
          <PopupsContent sx={styles.popupsContentLeft}>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </PopupsContent>
          <PopupsActions>
            <Button
              text="Post"
              size="small"
              variant={'outline'}
              onClick={handleClose4}
              sx={styles.maxButton}
            />
            <Button
              text="Post"
              size="small"
              onClick={handleClose4}
              sx={styles.maxLeftButton}
            />
          </PopupsActions>
        </Popup>
      </div>
    </>
  );
};

export default PopUpsPage;
