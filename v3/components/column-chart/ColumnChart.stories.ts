import type { Meta, StoryObj } from '@storybook/react';

import ColumnChart from '@/components/column-chart/ColumnChart';
import { TeacherEvaluations } from '@/components/column-chart/types';

const meta = {
  title: 'Ui Kit/Components/ColumnChart',
  component: ColumnChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof ColumnChart>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockData: TeacherEvaluations = {
  name: 'John Doe',
  amount: 4,
  type: 'random',
  mark: { 1: 2, 2: 5, 3: 10 },
};

export const Base: Story = {
  args: {
    data: mockData,
  },
};
