import { Dispatch, SetStateAction, SyntheticEvent, useEffect } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useSearchParams } from 'next/navigation';

import { TeachersPageTabs } from '@/components/templates/personal-teacher-page/utils';

// TODO: refactor this hook
export interface UseTabStateProps<T> {
  tab?: string;
  router: AppRouterInstance;
  setIndex: Dispatch<SetStateAction<T>>;
}

const useTabState = <T extends string>({
  tab,
  router,
  setIndex,
}: UseTabStateProps<T>) => {
  const { replace } = router;
  const query = useSearchParams();
  useEffect(() => {
    if (Object.values(TeachersPageTabs).includes(tab as TeachersPageTabs)) {
      setIndex(tab as T);
    } else {
      /*void replace(
        { query: { ...query, tab: TeachersPageTabs.GENERAL } },
        {
          shallow: true,
        },
      );*/
    }
  }, [tab, replace, query]);

  return async (event: SyntheticEvent, value: T) => {
    /*void replace(
      { query: { ...query, tab: value } },
      {
        shallow: true,
      },
    );*/
    setIndex(value as T);
  };
};

export default useTabState;
