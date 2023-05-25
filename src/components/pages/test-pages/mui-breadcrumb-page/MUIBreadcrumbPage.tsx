import { FC } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { Box, Breadcrumbs, Link, useMediaQuery } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';
import theme from '@/styles/theme';

import * as styles from './MUIBreadcrumbPage.styles';

interface Breadcrumb {
  label: string;
  href: string;
}
interface BreadcrumbsProps {
  items: Breadcrumb[];
  sx?: SxProps<Theme>;
}

const MUIBreadcrumbPage: FC<BreadcrumbsProps> = ({ items, sx }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('mobileMedium'));

  const breadcrumbs = items.map((item, index) => (
    <Link key={index} href={item.href} underline="none">
      {index === 0 && (
        <Box sx={styles.homeIcon}>
          <HomeIcon />
        </Box>
      )}
      <Box component="span">{item.label}</Box>
    </Link>
  ));

  return (
    <Box sx={mergeSx(styles.container, sx)}>
      <Breadcrumbs
        sx={styles.breadcrumb}
        color="inherit"
        separator={
          <Box sx={styles.arrow}>
            <ChevronRightIcon />
          </Box>
        }
        aria-label="breadcrumb"
      >
        {isMobile ? (
          <Link href={items[0].href} underline="none">
            <Box sx={styles.homeIcon}>
              <ChevronLeftIcon />
            </Box>
            <Box component="span">{items[0].label}</Box>
          </Link>
        ) : (
          breadcrumbs
        )}
      </Breadcrumbs>
    </Box>
  );
};

export default MUIBreadcrumbPage;
