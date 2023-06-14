import React, { FC, useState } from 'react';
import { Box } from '@mui/material';

import Tab from '@/components/common/ui/tab-mui/tab'; //todo dynamic importats
import TabContext from '@/components/common/ui/tab-mui/tab-context';
import TabList from '@/components/common/ui/tab-mui/tab-list';
import TabPanel from '@/components/common/ui/tab-mui/tab-panel';
import CommentTab from '@/components/pages/personal-teacher-page/personal-teacher-tabs/components/comment-tab';
import GeneralTab from '@/components/pages/personal-teacher-page/personal-teacher-tabs/components/general-tab';
import PollButtons from '@/components/pages/personal-teacher-page/personal-teacher-tabs/components/poll-buttons';
import { GetTeacherSubjectResponse } from '@/lib/services/teacher/TeacherService';

import * as stylesMUI from './PersonalSubjectTeacherTabs.styles';

const PersonalSubjectTeacherTabs: FC<GetTeacherSubjectResponse> = props => {
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
          <Tab label="Відгуки" count={count} textPosition="center" value="2" />
        </TabList>

        <Box sx={stylesMUI.tabPanelList}>
          <TabPanel value="1">
            {props.hasEnoughMarks ? (
              <GeneralTab {...props.marks} />
            ) : (
              props.buttonInfo.map((button, index) => (
                <PollButtons key={index} buttonInfo={props.buttonInfo} />
              ))
            )}
          </TabPanel>
          <TabPanel value="2">
            {count === 0 ? (
              <PollButtons buttonInfo={props.buttonInfo} />
            ) : (
              <CommentTab {...props.comments} />
            )}
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default PersonalSubjectTeacherTabs;
