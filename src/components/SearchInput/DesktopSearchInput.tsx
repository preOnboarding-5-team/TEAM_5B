import { MagnifierIcon } from 'assets';
// import SearchList from 'components/SearchList';
import styles from './search-input.module.scss';

function DesktopSearchInput() {
  return (
    <div data-id="desktop" className={styles['desktop-search-input']}>
      <div className={styles['input-container']}>
        <MagnifierIcon />
        <input
          type="search"
          className={styles.input}
          placeholder="질환명을 입력해 주세요."
        />
      </div>
      <button type="button" className={styles.button}>
        검색
      </button>
      {/* <SearchList /> */}
    </div>
  );
}

export default DesktopSearchInput;
