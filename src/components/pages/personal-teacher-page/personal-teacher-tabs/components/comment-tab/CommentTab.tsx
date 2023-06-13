import { FC } from 'react';
import { Box } from '@mui/material';

import Comment from '@/components/common/ui/comment';
import { GetTeacherCommentsDTO } from '@/lib/api/teacher/dto/GetTeacherCommentsDTO';

import * as styles from './CommentTab.styles';

const CommentTab: FC<GetTeacherCommentsDTO> = ({ questions }) => {
  return (
    <Box sx={styles.wrapper}>
      {questions?.map(question =>
        question.comments.map((comment, index) => (
          <>
            <Comment
              key={index}
              text={
                'ashjdsajkhsadjkhkhjdsajkhlasdjkhlsadjkhlasdjkl asjhdk askjld askjld akjsd kjlasdhkj askjdh askjld hjkasd kjsadkj asjkd askjld asjkd kjasldjkasdkj hlasjdkl askjld asjlkhdashjlkd'
              }
              semester={2}
              year={comment.year}
            />
            <Comment
              key={index}
              text={
                'ashjdsajkhsadjkhkhjdsajkhlasdjkhlsadjkhlasdjkl asjhdk askjld askjld akjsd kjlasdhkj askjdh askjld hjkasd kjsadkj asjkd askjld asjkd kjasldjkasdkj hlasjdkl askjld asjlkhdashjlkd'
              }
              semester={comment.semester}
              year={comment.year}
            />
            <Comment
              key={index}
              text={
                'ashjdsajkhsadjkhkhjdsajkhlasdjkhlsadjkhlasdjkl asjhdk askjld askjld akjsd kjlasdhkj askjdh askjld hjkasd kjsadkj asjkd askjld asjkd kjasldjkasdkj hlasjdkl askjld asjlkhdashjlkd'
              }
              semester={comment.semester}
              year={comment.year}
            />
            <Comment
              key={index}
              text={'lol'}
              semester={comment.semester}
              year={comment.year}
            />
            <Comment
              key={index}
              text={
                'ashjdsajkhsadjkhkhjdsajkhlasdjkhlsadjkhlasdjkl asjhdk askjld askjld akjsd kjlasdhkj askjdh askjld hjkasd kjsadkj asjkd askjld asjkd kjasldjkasdkj hlasjdkl askjld asjlkhdashjlkd'
              }
              semester={comment.semester}
              year={comment.year}
            />
          </>
        )),
      )}
    </Box>
  );
};

export default CommentTab;
