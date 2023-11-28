import React, {FC, useCallback, useEffect, useState} from 'react';
import {SearchFormProps, UserSearchForm} from "@/components/pages/admin/user-page/user-search/search-form/searchForm";
import userSearchForm from "@/components/pages/admin/user-page/user-search/search-form";
import SearchInitialValues from "@/components/pages/admin/user-page/user-search/search-form/constants";
import {DropDownOption} from "@/components/common/ui/form/dropdown/types";
import {SearchFormFields} from "@/components/pages/search-pages/search-form/types";
import {Box} from "@mui/material";
import Breadcrumbs from "@/components/common/ui/breadcrumbs";

const filterOptions: DropDownOption[] = [
    { id: 'firstName', label: 'Іменем' },
    { id: 'lastName', label: 'Прізвищем' },
];

const localStorageName = "userSearchPageStorage";

export const UserSearchPage = () => {
    const initialValues = localStorage.getItem(localStorageName)
        ? JSON.parse(localStorage.getItem(localStorageName) || '{}')
        : SearchInitialValues;
    const [queryObj, setQueryObj] = useState<SearchFormFields>(initialValues);
    const [curPage, setCurPage] = useState(0);
    const submitHandler: SearchFormProps['onSubmit'] = useCallback(query => {
        setQueryObj(prev => ({ ...prev, ...query }));
        setCurPage(0);
    }, []);

    useEffect(() => {
        void refetch();
    }, [queryObj, curPage, refetch]);
    /*
      const { data, isLoading, refetch, isFetching } =
        useQuery<GetTeachersResponse>(
          'lecturers',
          () => TeacherAPI.getAll(queryObj, PAGE_SIZE * (curPage + 1)),
          { keepPreviousData: true, refetchOnWindowFocus: false },
    );

  useEffect(() => {
    void refetch();
  }, [queryObj, curPage, refetch]);
//
  return (
    <Box sx={styles.layout}>
      <Breadcrumbs items={breadcrumbs} sx={styles.breadcrumbs} />
      <SearchForm
        searchPlaceholder="Оберіть викладача"
        filterDropDownOptions={filterOptions}
        onSubmit={submitHandler}
        initialValues={initialValues}
        localStorageName={localStorageName}
      />
      {data && <TeacherSearchList teachers={data.teachers} />}
      {isLoading ||
        (isFetching && (
          <Box sx={styles.pageLoader}>
            <Progress />
          </Box>
        ))}
      {data?.teachers.length === (curPage + 1) * PAGE_SIZE && (
        <Button
          sx={styles.loadBtn}
          text="Завантажити ще"
          variant={ButtonVariant.FILLED}
          color={ButtonColor.SECONDARY}
          onClick={() => setCurPage(pr => pr + 1)}
        />
      )}
    </Box>
  );
      * */


    return <>
        <Box sx={styles.layout}>
            <Breadcrumbs items={breadcrumbs} sx={styles.breadcrumbs} />
            <UserSearchForm
                onSubmit = {()=>{}}
                initialValues = {SearchInitialValues}
                filterDropDownOptions = {filterOptions}
                searchPlaceholder={"Пошук"}
                localStorageName={localStorageName}
            />

        </Box>
    </>
}


export default  UserSearchPage;