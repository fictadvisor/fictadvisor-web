import { FC } from 'react';
import { Metadata } from 'next';

import PageLayout from '@/components/common/layout/page-layout/PageLayout';
import PollPage from '@/components/templates/poll-page';
interface PollPage {
  params: {
    disciplineTeacherId: string;
  };
}
export const metadata: Metadata = {
  title: 'Опитування',
  description:
    'На цій сторінці ти зможеш пройти опитування про викладача. Ця сторінка створена для збору відгуків та оцінок його методики викладання та загального враження від занять. ',
};
const Poll: FC<PollPage> = ({ params }) => {
  return (
    <PageLayout>
      <PollPage disciplineTeacherId={params.disciplineTeacherId} />
    </PageLayout>
  );
};

export default Poll;
