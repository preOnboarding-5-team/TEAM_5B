import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';

import { LeftArrowIcon, MagnifierIcon } from 'assets';
import { useAppSelector, useAppDispatch } from 'hooks';
import { setFilteredList, setSearchString } from 'store';

import SearchList from 'components/SearchList';

import styles from './search-input.module.scss';

function MobileSearchInput() {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const listRef = useRef<HTMLUListElement>(null);

  const dispatch = useAppDispatch();
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );

  const placeholder = searchString.length
    ? searchString
    : '질환명을 입력해 주세요.';

  const toggleSearchInput = () => setIsSearching((prev) => !prev);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchString(e.target.value.trimStart()));
    if (e.target.value.length === 0) {
      dispatch(setFilteredList([]));
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const firstListItem = listRef.current?.firstElementChild as HTMLLIElement;
      firstListItem.focus();
    }
  };

  return (
    <>
      <button
        type="button"
        tabIndex={0}
        className={styles['mobile-search-input']}
        onClick={toggleSearchInput}
      >
        {placeholder}
        <MagnifierIcon />
      </button>
      <section
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
            onKeyDown={onKeyDown}
          />
          <MagnifierIcon />
        </div>
        <SearchList listRef={listRef} />
      </section>
    </>
  );
}

export default MobileSearchInput;
