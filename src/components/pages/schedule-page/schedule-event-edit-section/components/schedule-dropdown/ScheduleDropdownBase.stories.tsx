import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DropDownOption } from '@/components/common/ui/form/dropdown/types';

import ScheduleDropdown, { ScheduleDropdownProps } from './ScheduleDropdown';

const meta = {
  title: 'Ui Kit/Components/ScheduleDropdown',
  component: ScheduleDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScheduleDropdown>;

export default meta;

const options: DropDownOption[] = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
  { id: '5', label: 'Option 5' },
];

type Story = StoryObj<typeof meta>;

export const Base: Story = (args: ScheduleDropdownProps) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    args.onChange && args.onChange(newValue);
  };

  return <ScheduleDropdown {...args} onChange={handleChange} value={value} />;
};

Base.args = {
  options: options,
  placeholder: 'Select an option',
  value: '',
  width: '400px',
};
