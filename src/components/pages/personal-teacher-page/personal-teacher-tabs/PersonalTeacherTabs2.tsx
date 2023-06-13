import React, { FC, useState } from 'react';
import { Box } from '@mui/material';

import Tab from '@/components/common/ui/tab-mui/tab'; //todo dynamic importats
import TabContext from '@/components/common/ui/tab-mui/tab-context';
import TabList from '@/components/common/ui/tab-mui/tab-list';
import TabPanel from '@/components/common/ui/tab-mui/tab-panel';
import CommentTab from '@/components/pages/personal-teacher-page/personal-teacher-tabs/components/comment-tab';
import GeneralTab from '@/components/pages/personal-teacher-page/personal-teacher-tabs/components/general-tab';
import PollButton from '@/components/pages/personal-teacher-page/personal-teacher-tabs/components/poll-button';
import SubjectTab from '@/components/pages/personal-teacher-page/personal-teacher-tabs/components/subject-tab';
import { GetTeacherResponse } from '@/lib/services/teacher/TeacherService';

import * as stylesMUI from './PersonalTeacherTabs.styles';

import styles from './PersonalTeacherTabs.module.scss';

const TabsPage: FC<GetTeacherResponse> = props => {
  const [index, setIndex] = useState<string>('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setIndex(newValue);
  };

  const count = props.comments.questions[0]?.comments.length ?? 0;

  return (
    <Box>
      <TabContext value={index}>
        <TabList id="lol" onChange={handleChange} sx={stylesMUI.tabList}>
          <Tab label="Загальне" textPosition="center" value="1" />
          <Tab label="Предмети" textPosition="center" value="2" />
          <Tab label="Відгуки" count={count} textPosition="center" value="3" />
        </TabList>

        <Box sx={stylesMUI.tabPanelList}>
          <TabPanel value="1">
            {props.hasEnoughMarks ? (
              <GeneralTab {...props.marks} />
            ) : (
              props.buttonInfo.map((button, index) => (
                <PollButton key={index} />
              ))
            )}
          </TabPanel>
          <TabPanel value="2">
            <SubjectTab
              subjects={props.subjects}
              teacherId={props.info.teacher.id}
            />
          </TabPanel>
          <TabPanel value="3">
            <CommentTab {...props.comments} />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default TabsPage;
