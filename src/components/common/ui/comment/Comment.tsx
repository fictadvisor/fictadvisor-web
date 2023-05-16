import {Box, Typography} from "@mui/material";
import * as styles from "./Comment.styles";

const Comment = ({text, semester, year}) => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.text}>{text}</Typography>
      <Typography sx={styles.date}>{semester} семестр {year}</Typography>
    </Box>
  );
};

export default Comment;
