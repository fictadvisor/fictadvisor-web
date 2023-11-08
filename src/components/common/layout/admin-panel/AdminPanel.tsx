import { Box, Drawer, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import * as styles from './AdminPanel.styles';
import { adminPanelTabs } from './constants';

const AdminPanel = () => {
  return (
    <Drawer anchor="left" variant="permanent" sx={styles.drawer}>
      <Image
        src={'/icons/halloween-logo.svg'}
        alt="FA logo"
        width={197}
        height={28}
        style={{
          margin: '16px 21px',
        }}
      />
      <Box sx={styles.tabList}>
        {adminPanelTabs.map((tab, index) => {
          return typeof tab !== 'string' ? (
            <Link href={tab.link}>
              <Box sx={styles.tab(index)}>
                <Box sx={styles.tabIcon}>{tab.icon}</Box>
                <Typography sx={styles.tabText}>{tab.text}</Typography>
              </Box>
            </Link>
          ) : (
            <Typography sx={styles.pollPartHeader}>{tab}</Typography>
          );
        })}
      </Box>
    </Drawer>
  );
};

export default AdminPanel;
