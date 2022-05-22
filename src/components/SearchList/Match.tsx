import { useAppSelector } from 'hooks';

import styles from './search-list.module.scss';

type TMatchProps = {
  sickNm: string;
};

function Match({ sickNm }: TMatchProps) {
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );

  if (searchString && sickNm.indexOf(searchString) !== -1)
    return (
      <span className={styles.name}>
        {sickNm.split(searchString)[0]}
        <mark>{searchString}</mark>
        {sickNm.split(searchString)[1]}
      </span>
    );
  return <span className={styles.name}>{sickNm}</span>;
}

export default Match;
