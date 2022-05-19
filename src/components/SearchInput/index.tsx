import DesktopSearchInput from './DesktopSearchInput';
import MobileSearchInput from './MobileSearchInput';

import styles from './search-input.module.scss';

function SearchInput() {
  return (
    <div className={styles['search-input']}>
      <MobileSearchInput />
      <DesktopSearchInput />
    </div>
  );
}

export default SearchInput;
