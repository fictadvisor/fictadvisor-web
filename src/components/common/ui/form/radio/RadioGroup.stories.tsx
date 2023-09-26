import React, { useState } from 'react';
import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { Form, Formik } from 'formik';

import RadioGroup from '@/components/common/ui/form/radio/RadioGroup';

type RadioGroupStoryType = {
  name: string;
  options: { label: string; value: string }[];
};

const RadioGroupStory: React.FC<RadioGroupStoryType> = (
  args: RadioGroupStoryType,
) => {
  const [name, setName] = useState('Name');

  return (
    <Box sx={{ padding: '20px', backgroundColor: 'backgroundDark.300' }}>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <RadioGroup {...args}></RadioGroup>
        </Form>
      </Formik>
    </Box>
  );
};

const meta = {
  title: 'Ui Kit/Components/form/radio/RadioGroup',
  component: RadioGroupStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    name: 'Оберіть спеціальність',
    options: [
      {
        label: '121 Інженерія програмного забезпечення',
        value: '121',
      },
      {
        label: "123 Комп'ютерна інженерія",
        value: '123',
      },
      {
        label: '126 Інформаційні системи та технології',
        value: '126',
      },
    ],
    selectedValue: '123',
    sx: {
      display: 'flex',
      justifyContent: 'column',
      gap: '36px',
    },
  },
};
