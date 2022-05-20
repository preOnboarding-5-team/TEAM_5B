import { LeftArrowIcon, MagnifierIcon } from 'assets';
import { SetStateAction, useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { useQueryDebounce, useAppSelector, useAppDispatch } from 'hooks';

import SearchList from 'components/SearchList';
import { fetcher } from 'utils';
import { setSearchString } from 'store/searchString';
import { setfilteredList } from 'store/filteredList';
import styles from './search-input.module.scss';

function MobileSearchInput() {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );
  const searchInput = useQueryDebounce(searchString, 500);

  const { data } = useQuery(['data', searchInput], () => fetcher(searchInput), {
    enabled: !!searchInput,
  });

  useEffect(() => {
    if (searchValue.length === 0) {
      dispatch(setfilteredList([]));
    }
    dispatch(setSearchString(searchValue));
  }, [searchValue, dispatch]);

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        dispatch(setfilteredList(data));
      } else {
        dispatch(setfilteredList([data]));
      }
    }
  }, [data, dispatch]);

  const onChange = useCallback(
    (e: { target: { value: SetStateAction<string> } }) =>
      setSearchValue(e.target.value),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchValue]
  );

  const toggleSearchInput = () => {
    setIsSearching((prev) => !prev);
  };

  return (
    <>
      <div
        role="button"
        tabIndex={-1}
        className={styles['mobile-search-input']}
        onClick={toggleSearchInput}
      >
        {/* input에 입력된 값이 들어가야함 */}
        <span>질환명을 입력해 주세요.</span>
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
            onChange={onChange}
          />
          <MagnifierIcon />
        </div>
        {data && searchString ? <SearchList /> : <p>검색어 없음</p>}
      </div>
    </>
  );
}

export default MobileSearchInput;
