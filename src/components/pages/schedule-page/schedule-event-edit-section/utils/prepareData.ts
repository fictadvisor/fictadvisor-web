import { SharedEventBody } from '@/lib/api/schedule/types/shared';

export const prepareData = (
  data: Partial<SharedEventBody>,
  initialData: Partial<SharedEventBody>,
) => {
  for (const _key in data) {
    const key = _key as keyof SharedEventBody;
    if (
      JSON.stringify(data[key]) === JSON.stringify(initialData[key]) &&
      key != 'teachers'
    ) {
      data[key] = undefined;
    }
  }
};
