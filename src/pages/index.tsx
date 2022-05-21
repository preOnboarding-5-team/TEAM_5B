import { useEffect } from 'react';
import { useAppSelector } from 'hooks';
import Main from './Main';

import styles from './app.module.scss';

function App() {
  const fetchCount = useAppSelector((state) => state.fetchCount.count);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('fetched:', fetchCount, 'times');
  }, [fetchCount]);

  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
}

export default App;
