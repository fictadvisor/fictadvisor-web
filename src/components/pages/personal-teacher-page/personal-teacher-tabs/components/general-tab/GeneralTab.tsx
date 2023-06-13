import { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import CircleDiagram from '@/components/common/ui/circle-diagram';
import ColumnChart from '@/components/common/ui/column-chart';
import LineGraph from '@/components/common/ui/line_graph';
import Radar from '@/components/common/ui/radar';
import {
  AmountMarkType,
  GetTeacherMarksDTO,
  RadarCircleMarkType,
} from '@/lib/api/teacher/dto/GetTeacherMarksDTO';

import * as styles from './GeneralTab.styles';

const GeneralTab: FC<GetTeacherMarksDTO['marks']> = marks => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
      <Box sx={styles.radarWrapper}>
        <Radar marks={radarMarks} />
      </Box>
      <List>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Детальніше" />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit sx={styles.collapse}>
          {radarMarks.map(mark => (
            <List key={mark.name} component="div">
              <LineGraph label={mark.name} value={mark.mark} />
            </List>
          ))}
        </Collapse>
      </List>
      <Box sx={styles.circleWrapper}>
        {circleMarks.map(mark => (
          <Box key={mark.name} sx={styles.circleGraph}>
            <CircleDiagram value={mark.mark} />
            <Typography variant="body1" sx={styles.circleGraphNameWrapper}>
              {mark.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={styles.columnWrapper}>
        {columnMarks.map(mark => (
          <Box key={mark.name}>
            <ColumnChart data={mark} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GeneralTab;
