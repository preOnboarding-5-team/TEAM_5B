import { SetStateAction, useCallback, useEffect, useState } from 'react';

import { LeftArrowIcon, MagnifierIcon } from 'assets';

import SearchList from 'components/SearchList';
import { useQueryDebounce } from 'hooks';
import { useQuery } from 'react-query';
import { fetcher } from 'utils';

import styles from './search-input.module.scss';

function MobileSearchInput() {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [cursor, setCursor] = useState(-2);
  const searchInput = useQueryDebounce(searchValue, 500);

  const { data } = useQuery(['data', searchInput], () => fetcher(searchInput), {
    enabled: !!searchInput,
  });

  const onChange = useCallback(
    (e: { target: { value: SetStateAction<string> } }) =>
      setSearchValue(e.target.value),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchValue]
  );

  const keyboardNavigation = useCallback(
    (e: KeyboardEvent) => {
      if (data === undefined) return;

      if (e.key === 'ArrowDown' && isSearching) {
        setCursor((prev) => (prev < data.length - 1 ? prev + 1 : prev));
      }
      if (e.key === 'ArrowUp' && isSearching) {
        setCursor((prev) => (prev > 0 ? prev - 1 : 0));
      }
      if (e.key === 'Enter' && cursor > 0) {
        setCursor(-1);
        setIsSearching(false);
      }
    },
    [data, isSearching, setIsSearching, setCursor, cursor]
  );

  useEffect(() => {
    window.addEventListener('keydown', keyboardNavigation);
    return () => {
      window.removeEventListener('keydown', keyboardNavigation);
    };
  }, [keyboardNavigation]);

  const mouseDown = (idx: number) => {
    setCursor(idx);
  };

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
        {data ? (
          <SearchList data={data} cursor={cursor} mouseDown={mouseDown} />
        ) : (
          <p>검색어 없음</p>
        )}
      </div>
    </>
  );
}

export default MobileSearchInput;
