import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';

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
import { TeachersPageTabs } from '@/components/pages/personal-teacher-subject-page/PersonalTeacherSubjectPage';
import { GetTeacherSubjectsDTO } from '@/lib/api/teacher/dto/GetTeacherSubjectsDTO';

import styles from './PersonalTeacherSubjectTabs.module.scss';
export type PersonalTeacherTabsProps = GetTeacherSubjectsDTO;

export type TabsPageProps = {
  tabIndex: string;
  handleChange: (value) => void;
};

const TabsPage: FC<TabsPageProps> = props => {
  const router = useRouter();
  return (
    <div className={styles['tabs']}>
      <div className={styles['karusel']}>
        <TabList
          className={styles['tab-list-desktop']}
          onChange={props.handleChange}
          currentValue={props.tabIndex}
        >
          <TabItem
            size={TabItemContentSize.NORMAL}
            className="tab-item"
            text="Загальне"
            position={TabItemContentPosition.LEFT}
            value={TeachersPageTabs.GENERAL}
          ></TabItem>
          <TabItem
            size={TabItemContentSize.NORMAL}
            className="tab-item"
            text="Відгуки"
            position={TabItemContentPosition.LEFT}
            count={'0'}
            value={TeachersPageTabs.REVIEWS}
          ></TabItem>
          <TabItem
            size={TabItemContentSize.NORMAL}
            className="tab-item"
            text="Семестри"
            position={TabItemContentPosition.LEFT}
            value={TeachersPageTabs.SEMESTERS}
          ></TabItem>
        </TabList>
        <TabList
          className={styles['tab-list-mobile']}
          onChange={props.handleChange}
          currentValue={props.tabIndex}
        >
          <TabItem
            size={TabItemContentSize.SMAll}
            className="tab-item"
            text="Загальне"
            position={TabItemContentPosition.LEFT}
            value={TeachersPageTabs.GENERAL}
          ></TabItem>
          <TabItem
            size={TabItemContentSize.SMAll}
            className="tab-item"
            text="Відгуки"
            position={TabItemContentPosition.LEFT}
            count={'0'}
            value={TeachersPageTabs.REVIEWS}
          ></TabItem>
          <TabItem
            size={TabItemContentSize.SMAll}
            className="tab-item"
            text="Семестри"
            position={TabItemContentPosition.LEFT}
            value={TeachersPageTabs.SEMESTERS}
          ></TabItem>
        </TabList>
      </div>

      <TabPanelsList
        className={styles['tab-panels-list']}
        currentValue={props.tabIndex}
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
