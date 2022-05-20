import { MagnifierIcon } from 'assets';
import { useEffect, useRef, useState } from 'react';

import { useAppSelector } from 'hooks';

import { IItem } from 'types/search.d';
import Match from './Match';
import styles from './search-list.module.scss';

function SearchList() {
  // 검색 결과 예시

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

  return (
    <ul ref={containerRef} className={containerType}>
      <li className={styles.label}>추천 검색어</li>

      {filteredList?.map((item: IItem, idx: number) => {
        const key = `$search-list-key-${idx}`;
        return (
          <li key={key} className={styles.item}>
            <MagnifierIcon />{' '}
            <span className={styles.name}>
              <Match sickNm={item.sickNm} />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchList;
