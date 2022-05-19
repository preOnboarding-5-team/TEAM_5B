import { useQuery } from 'react-query';
import { fetcher } from 'utils';

import styles from './main.module.scss';

function Main() {
  const { data } = useQuery('data', () => fetcher('구강'));

  return (
    <div className={styles.main}>
      {data?.map((item, idx) => {
        const key = `data-key-${idx}`;
        return <h1 key={key}>{item.sickNm}</h1>;
      })}
    </div>
  );
}

export default Main;
