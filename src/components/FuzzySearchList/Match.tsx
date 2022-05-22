import styles from './fuzzy-search-list.module.scss';

type TMatchProps = {
  sickNm: string;
};

function Match({ sickNm }: TMatchProps) {
  return (
    <span className={styles.name}>
      {sickNm.split(',').map((letter, idx) => {
        const key = `${letter}-${idx}`;
        return letter[0] === '|' ? (
          <mark key={key}>{letter.split('|')[1]}</mark>
        ) : (
          letter
        );
      })}
    </span>
  );
}

export default Match;
