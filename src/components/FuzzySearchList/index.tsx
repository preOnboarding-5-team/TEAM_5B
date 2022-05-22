import {
  KeyboardEvent,
  MouseEvent,
  RefObject,
  useEffect,
  useState,
} from 'react';

import { MagnifierIcon } from 'assets';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setSearchString } from 'store';

import { IItem } from 'types/search.d';

import Match from './Match';

import styles from './fuzzy-search-list.module.scss';

type TSearchListProps = {
  listRef: RefObject<HTMLUListElement>;
};

function FuzzySearchList({ listRef }: TSearchListProps) {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const filteredList = useAppSelector((state) => state.filteredList.list);
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );

  const containerType = isMobile
    ? styles['mobile-list-container']
    : styles['desktop-list-container'];

  const isListVisible = searchString.length !== 0 ? 'flex' : 'none';

  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget.dataset.name as string;
    dispatch(setSearchString(target));
  };

  const onKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    e.preventDefault();
    if (e.key === 'ArrowDown') {
      if (e.currentTarget.nextElementSibling) {
        const nextTarget = e.currentTarget.nextElementSibling as HTMLLIElement;
        nextTarget.focus();
      }
    }
    if (e.key === 'ArrowUp') {
      if (e.currentTarget.previousElementSibling) {
        const prevTarget = e.currentTarget
          .previousElementSibling as HTMLLIElement;
        prevTarget.focus();
      }
    }
    if (e.key === 'Enter') {
      const target = e.currentTarget.dataset.name as string;
      dispatch(setSearchString(target));
    }
  };

  useEffect(() => {
    if (listRef.current?.parentElement?.dataset.id === 'desktop') {
      setIsMobile(false);
    }
  }, [listRef]);

  return (
    <ul
      role="menu"
      tabIndex={-1}
      ref={listRef}
      className={containerType}
      style={{ display: isListVisible }}
    >
      {filteredList.map((item: IItem, idx: number) => {
        const key = `${item.sickCd}-${idx}`;
        return (
          <li
            key={key}
            role="menuitem"
            onClick={onClick}
            onKeyDown={onKeyDown}
            tabIndex={0}
            data-name={item.sickNm}
            className={styles.item}
          >
            <MagnifierIcon />
            <Match sickNm={item.sickNm} />
          </li>
        );
      })}
    </ul>
  );
}

export default FuzzySearchList;
