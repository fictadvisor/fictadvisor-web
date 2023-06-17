interface Group {
  id: string;
  code: string;
}

export interface GetAllResponse {
  groups: Group[];
}
