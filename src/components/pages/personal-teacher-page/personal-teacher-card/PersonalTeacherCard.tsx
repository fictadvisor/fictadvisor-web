import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import Button, { ButtonVariant } from '@/components/common/ui/button';
import Tag, { TagColor, TagSize } from '@/components/common/ui/tag';
import styles from '@/components/pages/personal-teacher-page/personal-teacher-card/PersonalTeacherCard.module.scss';
import { GetTeacherResponse } from '@/lib/api/teacher/types/GetTeacherResponse';
import { TeacherRole } from '@/types/teacher';

import Contact from '../contacts/Contact';

const PersonalTeacherCard: React.FC<GetTeacherResponse> = props => {
  const [isContactsVisible, setContactsVisibility] = useState(false);
  return (
    <div className={styles['card']}>
      <div className={styles['photo']}>
        <img
          src={props.teacher.avatar}
          className={styles['image']}
          alt={'photo'}
        ></img>
      </div>
      <div className={styles['name-and-rating']}>
        <h4>
          {props.teacher.lastName +
            ' ' +
            props.teacher.firstName +
            ' ' +
            props.teacher.middleName}
        </h4>
      </div>

      <div className={styles['tags']}>
        {props.roles.includes(TeacherRole.LECTURER) && (
          <Tag color={TagColor.VIOLET} size={TagSize.SMALL} text={'Лектор'} />
        )}

        {props.roles.includes(TeacherRole.PRACTICIAN) && (
          <Tag color={TagColor.ORANGE} size={TagSize.SMALL} text={'Практик'} />
        )}

        {props.roles.includes(TeacherRole.LABORANT) && (
          <Tag color={TagColor.MINT} size={TagSize.SMALL} text={'Лаборант'} />
        )}
      </div>
      <div className={styles['info']}>{props.teacher.description}</div>
      {props.contacts.length !== 0 && (
        <Button
          className={styles['contacts-button']}
          text={'Контакти'}
          endIcon={isContactsVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
          variant={ButtonVariant.TEXT}
          onClick={() => setContactsVisibility(!isContactsVisible)}
        />
      )}
      <div
        className={styles[`contacts-${isContactsVisible ? `shown` : `hidden`}`]}
      >
        {props.contacts.map((contact, index) => (
          <Contact
            key={index}
            name={contact.name}
            displayName={contact.displayName}
            link={contact.link}
          />
        ))}
      </div>
    </div>
  );
};
export default PersonalTeacherCard;
