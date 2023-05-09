import React from 'react';
import { Box } from '@mui/material';

import LineGraph from '@/components/common/ui/line_graph';

import * as styles from './LineGraph.styles';

const LineGraphPage = () => (
  <Box sx={styles.wrapper}>
    <LineGraph value={35} label="1. Доступність оцінок" />
    <LineGraph value={61} label="2. Комунікативність" />
    <LineGraph value={50} label="3. Якась еще хуйня" />
    <LineGraph value={76} label="4. І ЕЩЕ ЯКАСЬ ХУЙНЯ" />
    <LineGraph value={100} label="5. НУ І ЕЩЕ ЯКАСЬ ХУЙНЯ" />
    <LineGraph value={20} label="6. АХАХХАХАХ" />
  </Box>
);

export default LineGraphPage;
