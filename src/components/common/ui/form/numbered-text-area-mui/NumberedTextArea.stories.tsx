import type { Meta, StoryObj } from '@storybook/react';

import NumberedTextArea from '@/components/common/ui/form/numbered-text-area-mui/NumberedTextArea';

const meta = {
  title: 'Ui Kit/Components/Form/NumberedTextArea',
  component: NumberedTextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NumberedTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    placeholder: 'This is a placeholder',
    showRemark: true,
    touched: false,
    error: 'Cant be empty!',
  },
};
