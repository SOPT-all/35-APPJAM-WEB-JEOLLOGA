import ScheduleCard from '@components/schedule/ScheduleCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ScheduleCard> = {
  title: 'Components/ScheduleCard',
  component: ScheduleCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    day: {
      control: { type: 'text' },
      description: 'Day of the schedule',
    },
    programs: {
      control: 'object',
      description: 'Programs with time and description',
    },
  },
  args: {
    day: '1일차 (마음 비우는 날)',
    programs: {
      '14:00~14:20': '방사배정/수련복 지급',
      '14:30~15:20': '오리엔테이션/사찰 예절',
      '15:30~16:30': '스님과의 차담 또는 사찰 안내',
      '16:30~17:30': '미륵보전 108배',
      '18:00~22:00': '저녁공양/달빛여행(자유시간)',
    },
  },
} satisfies Meta<typeof ScheduleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AnotherDay: Story = {
  args: {
    day: '2일차 (새로운 시작)',
    programs: {
      '05:00~05:30': '새벽 예불',
      '06:00~07:00': '발우공양',
      '08:00~09:00': '참선',
      '10:00~11:30': '템플스테이 소감 나누기',
    },
  },
};
