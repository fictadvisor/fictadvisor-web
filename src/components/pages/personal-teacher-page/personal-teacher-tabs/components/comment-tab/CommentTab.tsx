import { FC, useContext } from 'react';
import { Box } from '@mui/material';

import { FloatingCard } from '@/components/common/composite/cards/floating-card';
import Comment from '@/components/common/ui/comment';
import { TeacherContext } from '@/components/pages/personal-teacher-page/PersonalTeacherPage';
import { GetTeacherCommentsDTO } from '@/lib/api/teacher/dto/GetTeacherCommentsDTO';

import * as styles from './CommentTab.styles';

const CommentTab: FC<GetTeacherCommentsDTO> = ({ questions }) => {
  const { floatingCardShowed, teacher } = useContext(TeacherContext);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.commentsWrapper}>
        {questions?.map(question =>
          question.comments.map((comment, index) => (
            <Comment
              key={index}
              text={comment.comment}
              semester={comment.semester}
              year={comment.year}
            />
          )),
        )}
      </Box>
      {teacher && floatingCardShowed && <FloatingCard {...teacher} />}
    </Box>
  );
};

export default CommentTab;
