import { FC } from 'react';
import { Box } from '@mui/material';

import Radar from '@/components/common/ui/radar';
import {
  AmountMarkType,
  GetTeacherMarksDTO,
  RadarCircleMarkType,
} from '@/lib/api/teacher/dto/GetTeacherMarksDTO';

import * as styles from './GeneralTab.styles';

const GeneralTab: FC<GetTeacherMarksDTO> = marks => {
  const updatedMarks = Object.values(marks);

  const radarMarks = updatedMarks?.filter(
    mark => mark.type === 'RADAR',
  ) as RadarCircleMarkType[];

  const circleMarks = updatedMarks?.filter(
    mark => mark.type === 'CIRCLE',
  ) as RadarCircleMarkType[];

  const columnMarks = updatedMarks?.filter(
    mark => mark.type === 'AMOUNT',
  ) as AmountMarkType[];

  console.log(radarMarks);
  console.log(circleMarks);
  console.log(columnMarks);

  return (
    <Box sx={styles.wrapper}>
      <Radar marks={radarMarks} />
    </Box>
  );
};

export default GeneralTab;
