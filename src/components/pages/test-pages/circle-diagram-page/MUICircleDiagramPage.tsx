import { Box, Container } from '@mui/material';

import CircleDiagram from '@/components/common/ui/circle-diagram';

import * as styles from './MUICircleDiagramPage.styles';
const CircleDiagramPage = () => {
  return (
    <Container sx={styles.forContainer}>
      <Box sx={styles.forBox}>
        <CircleDiagram value={20} />
        <CircleDiagram value={60} />
        <CircleDiagram value={80} />
      </Box>
    </Container>
  );
};

export default CircleDiagramPage;
