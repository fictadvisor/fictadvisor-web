import api from "../../lib/api";

import { useState } from "react";
import { useQuery } from "react-query";
import { toInteger } from "../../lib/number";
import { useQueryParams } from "../../lib/query";

import PageLayout from "../../components/layout/PageLayout";
import Button from "../../components/ui/Button";
import Dropdown from "../../components/ui/Dropdown";
import Loader from "../../components/ui/Loader";

import SearchInput from "../../components/ui/SearchInput";
import SubjectItem from "../../components/SubjectItem";
import { useAuthentication } from "../../lib/context/AuthenticationContext";
import AddSubjectForm from "../../components/forms/AddSubjectForm";

const PROPERTIES = {
  pageSize: 10,
  sortBy: [
    {
      text: 'Популярністю',
      data: 'rating' as const
    },
    {
      text: 'Назвою',
      data: 'name' as const
    }
  ],
};

const SubjectsPage = () => {
  const [searchText, setSearchText] = useState('');
  const [sortType, _setSortType] = useState(0);
  const [page, _setPage] = useState(0);
  const [formMode, setFormMode] = useState(false);
  const authentication = useAuthentication();

  const { queryReady, withQueryParam } = useQueryParams((query) => {
    _setSortType(toInteger(query.sb, sortType));
    _setPage(toInteger(query.p, page));
  });

  const setSortType = withQueryParam('sb', _setSortType);
  const setPage =  withQueryParam('p', _setPage);

  const { data, isLoading, isFetching, error } = useQuery(
    ['subjects-search', page, searchText, sortType], 
    () => api.subjects.getAll({ page: 0, page_size: PROPERTIES.pageSize * (page + 1), search: searchText, sort: PROPERTIES.sortBy[sortType].data }), 
    { keepPreviousData: true, enabled: queryReady }
  );

  const searchActive = searchText.length > 0;

  return (
    <PageLayout
      meta={{ title: 'Предмети' }}
      title="Предмети"
    >
      {
        formMode 
          ? <AddSubjectForm authentication={authentication} onBack={() => setFormMode(false)} />
          : <Button 
              className="w-full" 
              onClick={() => {
                if (!authentication.user) {
                  authentication.login();
                  return;
                }

                setFormMode(true);
              }}
            >
              Додати предмет
            </Button>
      }
      <div className="adaptive-input-container d-flex m-b m-t">
        <SearchInput active={searchActive} className="d-flex-grow" placeholder="Пошук предметів" value={searchText} onChange={e => setSearchText(e.target.value)} />
        <Dropdown text="Сортування за:" active={sortType} onChange={i => setSortType(i)} options={PROPERTIES.sortBy} />
      </div>
      <div className="teacher-list">
        {
          isLoading || error || !data
            ? <Loader.Catchable error={error} />
            : data.items.map(s => 
                <SubjectItem 
                  key={s.id}
                  link={s.link} 
                  name={s.name}
                  teacherCount={s.teacher_count}
                />
            )
        }
      </div>
      {
        (data && !error && data.count > (page + 1) * PROPERTIES.pageSize) &&
        <Button loading={isLoading || isFetching} className="w-full" onClick={() => setPage(page + 1)}>Завантажити ще</Button>
      }
    </PageLayout>
  );
};

export default SubjectsPage;