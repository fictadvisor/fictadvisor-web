import { FC } from 'react';
import { Box } from '@mui/material';

import { FloatingCard } from '@/components/common/composite/cards/floating-card';
import { ContactType } from '@/components/pages/personal-teacher-page/contacts';
import {
  GetTeacherDTO,
  TeacherRoles,
} from '@/lib/api/teacher/dto/GetTeacherDTO';

import * as styles from './FloatingCardPage.styles';

const data: GetTeacherDTO = {
  id: '1',
  firstName: 'Катерина',
  middleName: 'Анатоліївна',
  lastName: 'Васильченко-Деружко',
  description:
    'Викладає на факультеті ФІОТ впродовж 10 років. Викладає на факультеті ФІОТ впродовж 10 років.  Викладає на факультеті ФІОТ впродовж 10 років.',
  avatar:
    'https://www.ocpathink.org/uploads/assets/img/Teacher-in-front-of-chalkboard.jpeg',
  roles: [TeacherRoles.LECTURER, TeacherRoles.PRACTICIAN],
  contacts: [
    {
      link: 'https://example.com',
      id: 'abc123',
      name: ContactType.TWITTER,
      displayName: 'john.doe@example.com',
    },
    {
      link: 'https://example.com',
      id: 'def456',
      name: ContactType.YOUTUBE,
      displayName: '+1 123-456-7890',
    },
    {
      link: 'https://example.com',
      id: 'def456',
      name: ContactType.TELEGRAM,
      displayName: '+1 123-456-7890',
    },
    {
      link: 'https://example.com',
      id: 'def456',
      name: ContactType.YOUTUBE,
      displayName: '+1 123-456-7890',
    },
  ],
};
const FloatingCardPage: FC = (): JSX.Element => {
  return (
    <Box sx={styles.wrapper}>
      <FloatingCard {...data} />
    </Box>
  );
};
export default FloatingCardPage;
