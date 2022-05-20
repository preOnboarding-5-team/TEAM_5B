import { ChangeEvent, useEffect } from 'react';
import { useQuery } from 'react-query';

import { MagnifierIcon } from 'assets';
import SearchList from 'components/SearchList';

import { useQueryDebounce, useAppSelector, useAppDispatch } from 'hooks';
import { fetcher } from 'utils';
import { setSearchString, setFilteredList } from 'store';

import styles from './search-input.module.scss';

function DesktopSearchInput() {
  const dispatch = useAppDispatch();
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );

  const searchInput = useQueryDebounce(searchString, 500);

  const { data } = useQuery(['data', searchInput], () => fetcher(searchInput), {
    enabled: !!searchInput,
  });

  const isVisible = searchString.length > 0;

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchString(e.target.value));

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        dispatch(setFilteredList(data));
      } else {
        dispatch(setFilteredList([data]));
      }
    } else {
      dispatch(setFilteredList([]));
    }
  }, [data, dispatch, isVisible]);
  return (
    <div data-id="desktop" className={styles['desktop-search-input']}>
      <div className={styles['input-container']}>
        <MagnifierIcon />
        <input
          type="search"
          className={styles.input}
          placeholder="질환명을 입력해 주세요."
          value={searchString}
          onChange={onChange}
        />
      </div>
      <button type="button" className={styles.button}>
        검색
      </button>
      <SearchList />
    </div>
  );
}

export default DesktopSearchInput;
