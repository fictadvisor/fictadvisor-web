import type { Meta, StoryObj } from '@storybook/react';

import Input from '@/components/common/ui/form/input-mui';

const meta = {
  title: 'Ui Kit/Components/Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
