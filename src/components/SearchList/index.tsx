import { MagnifierIcon } from 'assets';
import { useEffect, useRef, useState } from 'react';
import styles from './search-list.module.scss';

function SearchList() {
  // 검색 결과 예시
  const example = ['간암', '췌장암', '폐암', '대장암'];

  const [isMobile, setIsMobile] = useState<boolean>(true);

  const containerRef = useRef<HTMLUListElement>(null);

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
      {example.map((item, idx) => {
        const key = `$search-list-key-${idx}`;
        return (
          <li key={key} className={styles.item}>
            <MagnifierIcon /> <span className={styles.name}>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchList;
