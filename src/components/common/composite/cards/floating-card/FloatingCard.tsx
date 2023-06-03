import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

import Rating from '@/components/common/ui/rating-mui';
import Tag from '@/components/common/ui/tag-mui';
import Contact from '@/components/pages/personal-teacher-page/contacts';
import { GetTeacherDTO } from '@/lib/api/teacher/dto/GetTeacherDTO';

import * as styles from './FloatingCard.styles';

export const FloatingCard: FC<GetTeacherDTO> = ({
  teacher,
  roles,
  contacts,
}) => {
  const rating = 4.5;

  return (
    <Box sx={styles.card}>
      <Box sx={styles.top}>
        <Box
          src={teacher.avatar}
          sx={styles.image}
          component="img"
          alt="photo"
        ></Box>
        <Box sx={styles.info}>
          <Typography
            sx={styles.title}
            component="h4"
          >{`${teacher.lastName} ${teacher.firstName} ${teacher.middleName}`}</Typography>
          <Rating sx={styles.rating} rating={rating} />
          <Box sx={styles.tags}>
            {roles.includes('LECTURER') && (
              <Tag color={'info'} size={'small'} text={'Лектор'} />
            )}

            {roles.includes('PRACTICIAN') && (
              <Tag color={'orange'} size={'small'} text={'Практик'} />
            )}

            {roles.includes('LABORANT') && (
              <Tag color={'mint'} size={'small'} text={'Лаборант'} />
            )}
          </Box>
        </Box>
      </Box>

      <Box>{teacher.description}</Box>

      <Box sx={styles.contacts}>
        {contacts.map((contact, index) => (
          <Contact
            key={index}
            name={contact.name}
            displayName={contact.displayName}
            link={contact.link}
          />
        ))}
      </Box>
    </Box>
  );
};
