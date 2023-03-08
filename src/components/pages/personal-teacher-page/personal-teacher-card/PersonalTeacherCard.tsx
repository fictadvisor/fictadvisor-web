import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import Button, { ButtonVariant } from '@/components/common/ui/button';
import Tag, { TagColor, TagSize } from '@/components/common/ui/tag';
import styles from '@/components/pages/personal-teacher-page/personal-teacher-card/PersonalTeacherCard.module.scss';
import { GetTeacherDTO } from '@/lib/api/teacher/dto/GetTeacherDTO';

import Contact from '../contacts/Contact';

export type PersonalTeacherCardProps = GetTeacherDTO;

const PersonalTeacherCard: React.FC<PersonalTeacherCardProps> = props => {
  const [isContactsVisible, setContactsVisibility] = useState(false);
  return (
    <div className={styles['card']}>
      <div className={styles['photo']}>
        <img src={props.avatar} className={styles['image']} alt={'photo'}></img>
      </div>
      <div className={styles['name-and-rating']}>
        <h4>
          {props.lastName + ' ' + props.firstName + ' ' + props.middleName}
        </h4>
      </div>

      <div className={styles['tags']}>
        {props.roles.includes('LECTURER') && (
          <Tag color={TagColor.VIOLET} size={TagSize.SMALL} text={'Лектор'} />
        )}

        {props.roles.includes('PRACTICIAN') && (
          <Tag color={TagColor.ORANGE} size={TagSize.SMALL} text={'Практик'} />
        )}

        {props.roles.includes('LABORANT') && (
          <Tag color={TagColor.MINT} size={TagSize.SMALL} text={'Лаборант'} />
        )}
      </div>
      <div className={styles['info']}>{props.description}</div>

      <Button
        className={styles['contacts-button']}
        text={'Контакти'}
        endIcon={isContactsVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
        variant={ButtonVariant.TEXT}
        onClick={() => setContactsVisibility(!isContactsVisible)}
      />

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
