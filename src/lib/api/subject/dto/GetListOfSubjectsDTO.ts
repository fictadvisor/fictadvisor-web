export interface GetListOfSubjectsDTO {
  subjects: [
    {
      name: string;
      id: string;
      amount: number;
    },
  ];
  meta?: {
    pageSize: number;
    page: number;
    prevPageElems: number;
    nextPageElems: number;
  };
}
