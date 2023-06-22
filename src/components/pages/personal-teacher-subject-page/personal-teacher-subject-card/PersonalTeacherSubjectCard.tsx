import { FC, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

import Button, { ButtonVariant } from '@/components/common/ui/button';
import Tag from '@/components/common/ui/tag-mui';
import { TagColor, TagSize } from '@/components/common/ui/tag-mui/types';
import styles from '@/components/pages/personal-teacher-subject-page/personal-teacher-subject-card/PersonalTeacherSubjectCard.module.scss';
import { TeacherRole, TeacherWithContact } from '@/types/teacher';

import Contact from '../contacts/Contact';

const PersonalTeacherSubjectCard: FC<TeacherWithContact> = props => {
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
      <div className={styles['subject']}>
        <h5>{props.subject.name}</h5>
      </div>
      <div className={styles['tags']}>
        {props.roles.includes(TeacherRole.LECTURER) && (
          <Tag color={TagColor.INDIGO} size={TagSize.SMALL} text="Лектор" />
        )}

        {props.roles.includes(TeacherRole.PRACTICIAN) && (
          <Tag color={TagColor.ORANGE} size={TagSize.SMALL} text="Практик" />
        )}

        {props.roles.includes(TeacherRole.LABORANT) && (
          <Tag color={TagColor.MINT} size={TagSize.SMALL} text="Лаборант" />
        )}
      </div>

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
          <div key={index} className={styles['contacts-item']}>
            <Contact
              name={contact.name}
              displayName={contact.displayName}
              link={contact.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default PersonalTeacherSubjectCard;
