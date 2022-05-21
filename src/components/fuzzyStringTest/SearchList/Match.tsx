import { useAppSelector } from 'hooks';

type TMatchProps = {
  sickNm: string;
};

function Match({ sickNm }: TMatchProps) {
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );

  return (
    <>
      {sickNm.split(',').map((test, i) => {
        return test[0] === '|' ? (
          <mark key={test}>{test.split('|')[1]}</mark>
        ) : (
          test
        );
      })}
    </>
  );
}

export default Match;
