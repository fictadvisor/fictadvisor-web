
export enum SearchOrder {
    ASCENDING  = 'asc',
    DESCENDING = 'desc',
}

export enum SearchFilter {
    ALL         = 'all',
    CONFIRMED   = 'confirmed',
    UNCONFIRMED = 'unconfirmed',
}

export enum SearchSort {
    NAME =     'name',
    EMAIL =    'email',
    LASTNAME = 'lastname',
    USERNAME = 'username',
}

export default interface  UserSearchFormFields {
    email: string,
    search: string,
    username: string,
    sort: SearchSort,
    order: SearchOrder,
    filter: SearchFilter;
}