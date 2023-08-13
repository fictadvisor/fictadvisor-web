
import type { Meta, StoryObj } from '@storybook/react';

import Popup from '@/components/common/ui/pop-ups-mui/Popup';
import Button from '@/components/common/ui/button-mui/Button';
import React from "react";
import { LockClosed } from '@/components/common/icons/LockClosed';


const meta = {
  title: 'Ui Kit/Components/Popup',
  component: Popup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: 'Application Received ',
    text: 'This will remove all data relating to Alex. This action cannot be reversed. Deleted data can not be recovered.',
    open: false,
    contentLeft: undefined,
    sx: undefined,
    hasCross: false,
    icon: React.createElement(LockClosed),
    firstButton: React.createElement(Button, { text: "Delete" }),
    secondButton: React.createElement(Button, { text: "Post" }),
    onClose: () => {},
  },
};
