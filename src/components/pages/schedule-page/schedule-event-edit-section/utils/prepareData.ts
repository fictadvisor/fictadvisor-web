import { PatchEventBody } from '@/lib/api/schedule/types/PatchEventBody';
import { SharedEventBody } from '@/lib/api/schedule/types/shared';

export const prepareData = (
  dataFromForm: Partial<SharedEventBody>,
  initialData: Partial<SharedEventBody>,
  week: number,
): PatchEventBody => {
  const finalData: PatchEventBody = JSON.parse(JSON.stringify(dataFromForm));
  for (const _key in finalData) {
    const key = _key as keyof SharedEventBody;
    if (
      JSON.stringify(dataFromForm[key]) === JSON.stringify(initialData[key]) &&
      key !== 'teachers'
      //   &&
      // key !== 'startTime' &&
      // key !== 'endTime'
    ) {
      finalData[key] = undefined;
    }
  }

  finalData.changeStartDate =
    new Date(initialData.startTime as string).toDateString() !==
    new Date(dataFromForm.startTime as string).toDateString();

  finalData.changeEndDate =
    new Date(initialData.endTime as string).toDateString() !==
    new Date(dataFromForm.endTime as string).toDateString();

  finalData.week = week.toString();

  return finalData;
};
