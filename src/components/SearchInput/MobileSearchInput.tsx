import { useState } from 'react';

import { LeftArrowIcon, MagnifierIcon } from 'assets';

import SearchList from 'components/SearchList';
import styles from './search-input.module.scss';

function MobileSearchInput() {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const toggleSearchInput = () => {
    setIsSearching((prev) => !prev);
  };

  return (
    <>
      <div
        role="button"
        tabIndex={-1}
        className={styles['mobile-search-input']}
        onClick={toggleSearchInput}
      >
        {/* input에 입력된 값이 들어가야함 */}
        <span>질환명을 입력해 주세요.</span>
        <MagnifierIcon />
      </div>
      <div
        data-id="mobile"
        className={styles['mobile-container']}
        style={isSearching ? { display: 'flex' } : { display: 'none' }}
      >
        <div className={styles['input-container']}>
          <LeftArrowIcon onClick={toggleSearchInput} />
          <input
            type="search"
            className={styles.input}
            placeholder="질환명을 입력해 주세요."
          />
          <MagnifierIcon />
        </div>
        <SearchList />
      </div>
    </>
  );
}

export default MobileSearchInput;
