import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SubjectCard } from '@/components/common/composite/cards/subject-card';
import Button, {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button';
import {
  TabItem,
  TabItemContentPosition,
  TabItemContentSize,
} from '@/components/common/ui/tab/tab-item/TabItem';
import { TabList } from '@/components/common/ui/tab/tab-list/TabList';
import { TabPanel } from '@/components/common/ui/tab/tab-panel/TabPanel';
import { TabPanelsList } from '@/components/common/ui/tab/tab-panels-list/TabPanelsList';
import { TeachersPageTabs } from '@/components/pages/personal-teacher-page/PersonalTeacherPage';

import styles from './PersonalTeacherTabs.module.scss';
export type PersonalTeacherTabsProps = {
  id: string;
  tabIndex: string;
  handleChange: (value: string) => void;
  subjects: {
    id: string;
    name: string;
  }[];
};

const TabsPage: FC<PersonalTeacherTabsProps> = ({
  id,
  tabIndex,
  handleChange,
  subjects,
}) => {
  const router = useRouter();
  return (
    <div className={styles['tabs']}>
      <div className={styles['karusel']}>
        <TabList
          className={styles['tab-list-desktop']}
          onChange={handleChange}
          currentValue={tabIndex}
        >
          <TabItem
            size={TabItemContentSize.NORMAL}
            className="tab-item"
            text="Загальне"
            position={TabItemContentPosition.LEFT}
            value={TeachersPageTabs.GENERAL}
          />
          <TabItem
            size={TabItemContentSize.NORMAL}
            className="tab-item"
            text="Предмети"
            position={TabItemContentPosition.LEFT}
            value={TeachersPageTabs.SUBJECTS}
          />
          <TabItem
            size={TabItemContentSize.NORMAL}
            className="tab-item"
            text="Відгуки"
            position={TabItemContentPosition.LEFT}
            count={'0'}
            value={TeachersPageTabs.REVIEWS}
          />
          <TabItem
            size={TabItemContentSize.NORMAL}
            className="tab-item"
            text="Семестри"
            position={TabItemContentPosition.LEFT}
            value={TeachersPageTabs.SEMESTERS}
          />
        </TabList>
        <TabList
          className={styles['tab-list-mobile']}
          onChange={handleChange}
          currentValue={tabIndex}
        >
          <TabItem
            size={TabItemContentSize.SMAll}
            className="tab-item"
            text="Загальне"
            position={TabItemContentPosition.LEFT}
            value={TeachersPageTabs.GENERAL}
          />
          <TabItem
            size={TabItemContentSize.SMAll}
            className="tab-item"
            text="Предмети"
            position={TabItemContentPosition.LEFT}
            value={TeachersPageTabs.SUBJECTS}
          />
          <TabItem
            size={TabItemContentSize.SMAll}
            className="tab-item"
            text="Відгуки"
            position={TabItemContentPosition.LEFT}
            count={'0'}
            value={TeachersPageTabs.REVIEWS}
          />
          <TabItem
            size={TabItemContentSize.SMAll}
            className="tab-item"
            text="Семестри"
            position={TabItemContentPosition.LEFT}
            value={TeachersPageTabs.SEMESTERS}
          />
        </TabList>
      </div>

      <TabPanelsList
        className={styles['tab-panels-list']}
        currentValue={tabIndex}
      >
        <TabPanel className="tab-panel" value={TeachersPageTabs.GENERAL}>
          <div className={styles['my-tab-panel']}>
            <div className={styles['text']}>
              <p>
                Статистика викладача ще збирається, як тільки опитування буде
                завершене, результат буде опублікований. Опитування буде
                впродовж 2 тижнів. Ви можете пройти опитування.
              </p>
            </div>
            <div className={styles['button-wrapper-desktop']}>
              <Button
                text={'Перейти до опитувань'}
                variant={ButtonVariant.FILLED}
                color={ButtonColor.PRIMARY}
                size={ButtonSize.LARGE}
                onClick={() => router.push('/poll')}
              />
            </div>
            <div className={styles['button-wrapper-mobile']}>
              <Button
                text={'Перейти до опитувань'}
                variant={ButtonVariant.FILLED}
                color={ButtonColor.PRIMARY}
                size={ButtonSize.SMALL}
                onClick={() => router.push('/poll')}
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel
          className={styles['tab-panel']}
          value={TeachersPageTabs.SUBJECTS}
        >
          <div className={styles['my-tab-panel-subjects']}>
            <ul className={styles['subject-search-list']}>
              {subjects &&
                subjects.map(subject => (
                  <li key={subject.id}>
                    <Link
                      href={`/discipline?teacherId=${id}&subjectId=${subject.id}`}
                    >
                      <SubjectCard name={`${subject.name}`} />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel className="tab-panel" value={TeachersPageTabs.REVIEWS}>
          <div className={styles['my-tab-panel']}>
            <div className={styles['text']}>
              <p>
                Статистика викладача ще збирається, як тільки опитування буде
                завершене, результат буде опублікований. Опитування буде
                впродовж 2 тижнів. Ви можете пройти опитування.
              </p>
            </div>
            <div className={styles['button-wrapper-desktop']}>
              <Button
                text={'Перейти до опитувань'}
                variant={ButtonVariant.FILLED}
                color={ButtonColor.PRIMARY}
                size={ButtonSize.LARGE}
                onClick={() => router.push('/poll')}
              />
            </div>
            <div className={styles['button-wrapper-mobile']}>
              <Button
                text={'Перейти до опитувань'}
                variant={ButtonVariant.FILLED}
                color={ButtonColor.PRIMARY}
                size={ButtonSize.SMALL}
                onClick={() => router.push('/poll')}
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel className="tab-panel" value={TeachersPageTabs.SEMESTERS}>
          <div className={styles['my-tab-panel']}>
            <div className={styles['text']}>
              <p>
                Статистика викладача ще збирається, як тільки опитування буде
                завершене, результат буде опублікований. Опитування буде
                впродовж 2 тижнів. Ви можете пройти опитування.
              </p>
            </div>
            <div className={styles['button-wrapper-desktop']}>
              <Button
                text={'Перейти до опитувань'}
                variant={ButtonVariant.FILLED}
                color={ButtonColor.PRIMARY}
                size={ButtonSize.LARGE}
                onClick={() => router.push('/poll')}
              />
            </div>
            <div className={styles['button-wrapper-mobile']}>
              <Button
                text={'Перейти до опитувань'}
                variant={ButtonVariant.FILLED}
                color={ButtonColor.PRIMARY}
                size={ButtonSize.SMALL}
                onClick={() => router.push('/poll')}
              />
            </div>
          </div>
        </TabPanel>
      </TabPanelsList>
    </div>
  );
};

export default TabsPage;
