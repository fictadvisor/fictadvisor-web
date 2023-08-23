import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { LockClosed } from '@/components/common/icons/LockClosed';
import { FieldSize } from '@/components/common/ui/form/common/types';
import {
  DropDownOption,
  DropdownProps,
} from '@/components/common/ui/form/dropdown/types';

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

const tagOptions: DropDownOption[] = [
  { id: '1', text: 'Option 1' },
  { id: '2', text: 'Option 2' },
  { id: '3', text: 'Option 3' },
  { id: '4', text: 'Option 4' },
  { id: '5', text: 'Option 5' },
];

type Story = StoryObj<typeof meta>;

export const Icon: Story = (args: ScheduleDropdownProps) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    args.onChange && args.onChange(newValue);
  };

  return <ScheduleDropdown {...args} onChange={handleChange} value={value} />;
};

Icon.args = {
  options: options,
  placeholder: 'Select an option',
  icon: <LockClosed />,
  value: '',
  width: '200px',
};

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

export const Tags: Story = (args: DropdownProps) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    args.onChange && args.onChange(newValue);
  };

  return <ScheduleDropdown {...args} onChange={handleChange} value={value} />;
};

Tags.args = {
  options: tagOptions,
  placeholder: 'Select an option',
  value: '',
  width: '400px',
  size: FieldSize.LARGE,
};
