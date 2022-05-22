import { useFuzzyStringMatching } from 'hooks/useFuzzyStringMatching';

import DesktopSearchInput from './DesktopSearchInput';
import MobileSearchInput from './MobileSearchInput';

import styles from './fuzzy-search-input.module.scss';

function FuzzySearchInput() {
  useFuzzyStringMatching();

  return (
    <div className={styles['search-input']}>
      <MobileSearchInput />
      <DesktopSearchInput />
    </div>
  );
}

export default FuzzySearchInput;
