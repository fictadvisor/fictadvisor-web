import { AxiosError } from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";
import PageLayout from "../../components/layout/PageLayout";
import Review from "../../components/Review";
import ReviewEditor from "../../components/forms/ReviewForm";
import SubjectInformation from "../../components/SubjectInformation";
import Button from "../../components/ui/Button";
import Disclaimer from "../../components/ui/Disclaimer";
import Dropdown from "../../components/ui/Dropdown";
import Loader from "../../components/ui/Loader";
import SearchInput from "../../components/ui/SearchInput";
import api from "../../lib/api";
import { useAuthentication } from "../../lib/context/AuthenticationContext";
import { toInteger } from "../../lib/number";
import { useQueryParams } from "../../lib/query";
import { getFullName } from "../../lib/text";

const PROPERTIES = {
  pageSize: 6,
  sortBy: [
    { text: 'Датою', data: 'date' as const },
    { text: 'Рейтингом', data: 'rating' as const }, 
  ]
};

const STATE_MESSAGES = {
  pending: () => <Disclaimer className="warning m-b">Інформація перевіряється редакцією</Disclaimer>,
  declined: () => <Disclaimer className="alert m-b">Інформація не є дійсною та була відхилена редакцією</Disclaimer>,
};

const ReviewList = ({ data, isFetching, setPage, page }) => {
  if (data.count === 0) {
    return (
      <Disclaimer>
        На жаль, у нас немає відгуків про цей курс
      </Disclaimer>
    );
  }

  return (
    <>
      <div className="review-group">
          {
            data.items.map((r, i) => <Review key={i} rating={r.rating} content={r.content} date={r.date} /> )
          }
        </div>
        {
          data.count > (page + 1) * PROPERTIES.pageSize &&
          <Button 
            loading={isFetching}
            className="w-full"
            onClick={() => setPage(page + 1)}
          >
            Завантажити ще
          </Button>
        }
    </>
  )
};

const CoursePage = ({ course }) => {
  const [searchText, _setSearchText] = useState('');
  const [reviewMode, setReviewMode] = useState(false);
  const [sortType, _setSortType] = useState(0);
  const [page, _setPage] = useState(0);

  const authentication = useAuthentication();
  const { user, getToken, loginUrl } = authentication;

  const { queryReady, withQueryParam } = useQueryParams((query) => {
    _setSortType(toInteger(query.sb, sortType));
    _setPage(toInteger(query.p, page));
    _setSearchText(query.s ?? '');
  });

  const setSearchText = withQueryParam('s', _setSearchText);
  const setSortType = withQueryParam('sb', _setSortType);
  const setPage =  withQueryParam('p', _setPage);

  const searchActive = searchText.length > 0;
  const fullName = getFullName(course.teacher.last_name, course.teacher.first_name, course.teacher.middle_name);

  const StateMessage = STATE_MESSAGES[course.state];

  const { data, isLoading, isFetching, error } = useQuery(
    ['course-reviews-search', course.link, page, searchText, sortType], 
    () => api.courses.getReviews(course.link, { page: 0, page_size: PROPERTIES.pageSize * (page + 1), search: searchText, sort: PROPERTIES.sortBy[sortType].data }), 
    { keepPreviousData: true, enabled: queryReady }
  );

  return (
    <PageLayout
      meta={{ title: `${course.name} - ${fullName}` }}
      title="Сторінка курсу"
    >
      {
        StateMessage &&
        <StateMessage />
      }
      <Link href={`/teachers/${course.teacher.link}`}>
        <a className="simple">
          <div className="block m-b d-flex">
            <div className="d-flex-grow f-bold" style={{ marginTop: '2px' }}>{fullName}</div>
            <div style={{ margin: '-6px 0 -12px' }}>
              <img className="avatar teacher small" src={course.teacher.image} />
            </div>
          </div>
        </a>
      </Link>
      <Link href={`/subjects/${course.subject_link}`}>
        <a className="simple">
          <SubjectInformation className="m-b" name={course.name} description={course.description} rating={course.rating} />
        </a>
      </Link>
      {
        reviewMode 
          ? <ReviewEditor token={getToken()} onBack={() => setReviewMode(false)} link={course.link} />
          : <Button 
              className="w-full" 
              onClick={() => {
                if (!user) {
                  authentication.login();
                  return;
                }

                setReviewMode(true);
              }}
            >
              Додати відгук
            </Button>
      }
      <div className="adaptive-input-container d-flex m-t m-b">
        <SearchInput active={searchActive} className="d-flex-grow" placeholder="Пошук відгуку за змістом" value={searchText} onChange={e => setSearchText(e.target.value)} />
        <Dropdown text="Сортування за:" active={sortType} onChange={i => setSortType(i)} options={PROPERTIES.sortBy} />
      </div>
      {
        isLoading || error || !data
          ? <Loader.Catchable error={error} />
          : <ReviewList data={data} isFetching={isFetching} page={page} setPage={setPage} />
      }
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { link } = context.query;

  try {
    const data = await api.courses.get(typeof(link) === 'object' ? link[0] : link);

    return {
      props: {
        course: data,
      },
    };
  } catch (e) {
    const error = e as AxiosError;

    if (error.response.status === 404) {
      return { notFound: true };
    }

    throw e;
  }
};

export default CoursePage;
