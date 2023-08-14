import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { LockClosed } from '@/components/common/icons/LockClosed';
import Button from '@/components/common/ui/button-mui/Button';
import Popup from '@/components/common/ui/pop-ups-mui/Popup';

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
    hasCross: false,
    icon: <LockClosed />,
    firstButton: <Button text="Delete" />,
    secondButton: <Button text="Post" />,
    onClose: () => {},
  },
};