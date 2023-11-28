import UserSearchFormFields, {
    SearchFilter,
    SearchOrder,
    SearchSort
} from '@/components/pages/admin/user-page/user-search/search-form/types';

const SearchInitialValues: UserSearchFormFields = {
    search: '',
    email: '',
    username: '',
    sort: SearchSort.NAME,
    filter: SearchFilter.ALL,
    order: SearchOrder.ASCENDING,
}

export default SearchInitialValues;