import { useEffect, useRef, useState } from 'react';

import { MagnifierIcon } from 'assets';
import { useAppDispatch, useAppSelector } from 'hooks';
import cx from 'classnames';

import { setControlCutsor } from 'store';
import { IItem } from 'types/search.d';
import Match from './Match';
import styles from './search-list.module.scss';

function SearchList() {
  // 검색 결과 예시
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const containerRef = useRef<HTMLUListElement>(null);

  const filteredList = useAppSelector((state) => state.filteredList.item);

  const cursor = useAppSelector((state) => state.controlCursor.cursor);

  const dispatch = useAppDispatch();

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

  const mouseDown = (idx: number) => {
    dispatch(setControlCutsor({ cursor: idx }));
  };

  return (
    <ul ref={containerRef} className={containerType}>
      <li className={styles.label}>추천 검색어</li>
      {noData()}
      {filteredList.map((item: IItem, idx: number) => {
        const key = `${item.sickCd}-${idx}`;
        return (
          <li
            key={key}
            className={cx(styles.item, {
              [styles.focused]: cursor === idx,
            })}
            onMouseMove={() => mouseDown(idx)}
          >
            <MagnifierIcon />
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
