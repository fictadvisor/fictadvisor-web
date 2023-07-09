import { Dispatch, SetStateAction, SyntheticEvent, useEffect } from 'react';
import { NextRouter } from 'next/router';

const useTabState = <T extends string, EnumValue extends string>(
  tab: EnumValue | string | string[] | undefined,
  router: NextRouter,
  setIndex: Dispatch<SetStateAction<EnumValue>>,
  tabsEnum: { [key in T]: EnumValue },
  defaultTab: EnumValue,
) => {
  const { replace, query, isReady } = router;
  useEffect(() => {
    if (!isReady) {
      return;
    }

    if (Object.values(tabsEnum).includes(tab)) {
      setIndex(tab as EnumValue);
    } else {
      void replace({ query: { ...query, tab: defaultTab } }, undefined, {
        shallow: true,
      });
    }
  }, [tab, isReady, replace, query, defaultTab, setIndex, tabsEnum]);

  return async (event: SyntheticEvent, value: EnumValue) => {
    await replace({ query: { ...query, tab: value } }, undefined, {
      shallow: true,
    });
    setIndex(value);
  };
};

export default useTabState;
