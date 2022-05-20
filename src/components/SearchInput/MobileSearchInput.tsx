import { ChangeEvent, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { LeftArrowIcon, MagnifierIcon } from 'assets';
import SearchList from 'components/SearchList';

import { useQueryDebounce, useAppSelector, useAppDispatch } from 'hooks';
import { fetcher } from 'utils';
import { setSearchString, setFilteredList } from 'store';

import styles from './search-input.module.scss';

function MobileSearchInput() {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );

  const searchInput = useQueryDebounce(searchString, 500);

  const { data } = useQuery(['data', searchInput], () => fetcher(searchInput), {
    enabled: !!searchInput,
  });

  const placeholder = searchString.length
    ? searchString
    : '질환명을 입력해 주세요.';

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchString(e.target.value));

  const toggleSearchInput = () => setIsSearching((prev) => !prev);

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
  }, [data, dispatch]);

  return (
    <>
      <div
        role="button"
        tabIndex={-1}
        className={styles['mobile-search-input']}
        onClick={toggleSearchInput}
      >
        <span>{placeholder}</span>
        <MagnifierIcon />
      </div>
      <div
        data-id="mobile"
        className={styles['mobile-container']}
        style={isSearching ? { display: 'flex' } : { display: 'none' }}
      >
        <div className={styles['input-container']}>
          <LeftArrowIcon onClick={toggleSearchInput} />
          <input
            type="search"
            className={styles.input}
            placeholder="질환명을 입력해 주세요."
            value={searchString}
            onChange={onChange}
          />
          <MagnifierIcon />
        </div>
        <SearchList />
      </div>
    </>
  );
}

export default MobileSearchInput;
