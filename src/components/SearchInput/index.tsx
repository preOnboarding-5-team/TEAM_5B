import { useEffect } from 'react';
import { useQuery } from 'react-query';

import {
  useAppDispatch,
  useAppSelector,
  useQueryDebounce,
  useShouldFetch,
} from 'hooks';
import {
  addFetchCount,
  setFilteredList,
  setLocalList,
  setQueryList,
} from 'store';
import { fetcher } from 'utils';

import { IItem } from 'types/search.d';

import DesktopSearchInput from './DesktopSearchInput';
import MobileSearchInput from './MobileSearchInput';

import styles from './search-input.module.scss';

function SearchInput() {
  const dispatch = useAppDispatch();
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );
  const localList = useAppSelector((state) => state.localList.list);
  const queryList = useAppSelector((state) => state.queryList.list);

  const searchInput = useQueryDebounce(searchString, 500);

  const shouldFetch = useShouldFetch(searchInput, queryList);

  const onSuccess = (res: IItem | IItem[]) => {
    // eslint-disable-next-line no-console
    dispatch(setQueryList(searchInput));
    if (res) {
      if (Array.isArray(res)) {
        dispatch(setLocalList(res));
      } else if (!Array.isArray(res)) {
        dispatch(setLocalList([res]));
      }
    }
  };

  const { isFetching } = useQuery(
    ['data', searchInput],
    () => fetcher(searchInput),
    {
      enabled: !!searchInput && shouldFetch,
      onSuccess: (res: IItem | IItem[]) => onSuccess(res),
      onSettled: () => {
        dispatch(addFetchCount());
      },
    }
  );

  useEffect(() => {
    const localFilteredList = localList.filter((item) =>
      item.sickNm.includes(searchInput)
    );

    if (isFetching) {
      dispatch(setFilteredList([]));
    }

    if (!isFetching && searchInput.length !== 0) {
      dispatch(setFilteredList(localFilteredList));
    }
  }, [dispatch, isFetching, localList, searchInput]);

  return (
    <div className={styles['search-input']}>
      <MobileSearchInput />
      <DesktopSearchInput />
    </div>
  );
}

export default SearchInput;
