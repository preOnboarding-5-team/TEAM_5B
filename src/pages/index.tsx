import { Route, Routes } from 'react-router-dom';

import Main from './Main';
import FuzzyString from './FuzzyString';

import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="fuzzystring" element={<FuzzyString />} />
        <Route
          path="*"
          element={
            <span>
              Not Found, only <mark>/</mark> and <mark>/fuzzystring</mark>
            </span>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
