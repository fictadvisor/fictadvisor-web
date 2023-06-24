import { FC } from 'react';
import { Box } from '@mui/material';

import Comment from '@/components/common/ui/comment';
import { GetTeacherCommentsResponse } from '@/lib/api/teacher/types/GetTeacherCommentsResponse';

import * as styles from './CommentTab.styles';

const CommentTab: FC<GetTeacherCommentsResponse> = ({ questions }) => {
  return (
    <Box sx={styles.wrapper}>
      {questions?.map(question =>
        question.comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        )),
      )}
    </Box>
  );
};

export default CommentTab;
