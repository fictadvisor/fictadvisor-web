import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Box } from '@mui/material';

import Breadcrumbs from '@/components/common/ui/breadcrumbs';
import Button from '@/components/common/ui/button-mui/Button';
import {
  ButtonColor,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import Progress from '@/components/common/ui/progress';
import { SearchFormProps } from '@/components/pages/search-pages/search-form/SearchForm';
import { SearchFormFields } from '@/components/pages/search-pages/search-form/types';
import {
  breadcrumbs,
  filterOptions,
  PAGE_SIZE,
} from '@/components/pages/search-pages/subject-search/constants';
import SubjectsAPI from '@/lib/api/subject/SubjectAPI';
import { GetListOfSubjectsResponse } from '@/lib/api/subject/types/GetListOfSubjectsResponse';
import { Subject } from '@/types/subject';

import { SubjectInitialValues } from '../search-form/constants';
import SearchForm from '../search-form/SearchForm';

import { SubjectSearchList } from './components/SubjectSearchList';
import * as styles from './SubjectSearchPage.styles';

const SubjectSearchPage = () => {
  const initialValues = localStorage.getItem('subjectForm')
    ? JSON.parse(localStorage.getItem('subjectForm') || '{}')
    : SubjectInitialValues;

  const localStorageName = 'subjectForm';

  const [queryObj, setQueryObj] =
    useState<SearchFormFields>(SubjectInitialValues);
  const [curPage, setCurPage] = useState(0);

  const submitHandler: SearchFormProps['onSubmit'] = useCallback(query => {
    setReloadSubjects(true);
    setLoadedSubjects([]);
    setQueryObj(prev => ({ ...prev, ...query }));
  }, []);

  const downloadHandler = () => {
    setReloadSubjects(false);
    setCurPage(prev => prev + 1);
  };
  const [loadedSubjects, setLoadedSubjects] = useState<Subject[]>([]);
  const [reloadSubjects, setReloadSubjects] = useState(true);
  const { data, isLoading, refetch, isFetching } =
    useQuery<GetListOfSubjectsResponse>(
      'subjects',
      () => {
        if (reloadSubjects) {
          return SubjectsAPI.getAll(queryObj, PAGE_SIZE * (curPage + 1));
        } else {
          setLoadedSubjects([
            ...(loadedSubjects ?? []),
            ...(data?.subjects ?? []),
          ]);
          return SubjectsAPI.getPage(queryObj, PAGE_SIZE, curPage + 1);
        }
      },
      { keepPreviousData: true, refetchOnWindowFocus: false },
    );

  useEffect(() => {
    void refetch();
  }, [queryObj, curPage, refetch, reloadSubjects]);

  return (
    <Box sx={styles.layout}>
      <Breadcrumbs items={breadcrumbs} sx={styles.breadcrumbs} />
      <SearchForm
        searchPlaceholder="Оберіть предмет"
        filterDropDownOptions={filterOptions}
        onSubmit={submitHandler}
        initialValues={initialValues}
        localStorageName={localStorageName}
      />
      {data && (
        <SubjectSearchList
          subjects={[...(loadedSubjects ?? []), ...data.subjects]}
        />
      )}
      {isLoading ||
        (isFetching && (
          <Box sx={styles.pageLoader}>
            <Progress />
          </Box>
        ))}
      {(data?.subjects?.length ?? 0) + loadedSubjects.length ===
        (curPage + 1) * PAGE_SIZE && (
        <Button
          sx={styles.loadBtn}
          text="Завантажити ще"
          variant={ButtonVariant.FILLED}
          color={ButtonColor.SECONDARY}
          onClick={downloadHandler}
        />
      )}
    </Box>
  );
};

export default SubjectSearchPage;
