import type { Meta, StoryObj } from '@storybook/react';

import Slider from './Slider';

const meta = {
  title: 'Ui Kit/Components/Form/Slider',
  component: Slider,
  decorators: [
    Story => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0 50px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {},
};
