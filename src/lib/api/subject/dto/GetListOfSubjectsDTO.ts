export interface GetListOfSubjectsDTO {
  subjects: [
    {
      name: string;
      id: string;
      amount: number;
    },
  ];
}