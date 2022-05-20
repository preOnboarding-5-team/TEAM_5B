import { useEffect, useRef, useState } from 'react';

import { MagnifierIcon } from 'assets';
import { useAppSelector } from 'hooks';

import { IItem } from 'types/search.d';
import Match from './Match';
import cx from 'classnames';
import styles from './search-list.module.scss';

function SearchList() {
<<<<<<< HEAD
=======
  // 검색 결과 예시
>>>>>>> e9b4baa (Add keybordNavigation in mobileSearch)
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const containerRef = useRef<HTMLUListElement>(null);

  const filteredList = useAppSelector((state) => state.filteredList.item);

  useEffect(() => {
    if (containerRef.current?.parentElement?.dataset.id === 'desktop') {
      setIsMobile(false);
    }
  }, []);

  const containerType = isMobile
    ? styles['mobile-list-container']
    : styles['desktop-list-container'];

  const noData = () => {
    if (filteredList.length !== 0) return null;
    return <span className={styles['no-data']}>검색어 없음</span>;
  };

  return (
    <ul ref={containerRef} className={containerType}>
      <li className={styles.label}>추천 검색어</li>
      {noData()}
      {filteredList.map((item: IItem, idx: number) => {
        const key = `${item.sickCd}-${idx}`;
        return (
          <li key={key} className={styles.item}>
<<<<<<< HEAD
            <MagnifierIcon />
            <span className={styles.name}>
=======
            <MagnifierIcon />{' '}
            <span
              className={cx(styles.item, {
                [styles.focused]: cursor === idx,
              })}
            >
>>>>>>> e9b4baa (Add keybordNavigation in mobileSearch)
              <Match sickNm={item.sickNm} />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchList;
