import { useQuery } from 'react-query';

import { useAppSelector, useQueryDebounce } from 'hooks';
import { fetcher } from 'utils';

import DesktopSearchInput from './DesktopSearchInput';
import MobileSearchInput from './MobileSearchInput';
import FuzzyString from './fuzzyString';

import styles from './search-input.module.scss';

function SearchInput() {
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );

  const searchInput = useQueryDebounce(searchString, 500);

  const { data } = useQuery(['data', searchInput], () => fetcher(searchInput), {
    enabled: !!searchInput,
  });

  FuzzyString();

  return (
    <div className={styles['search-input']}>
      <MobileSearchInput />
      <DesktopSearchInput />
    </div>
  );
}

export default SearchInput;
