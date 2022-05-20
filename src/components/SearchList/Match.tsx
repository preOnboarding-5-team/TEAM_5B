import { useAppSelector } from 'hooks';

function Match(item: { sickNm: string }) {
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );
  const { sickNm } = item;

  if (sickNm.indexOf(searchString) !== -1)
    return (
      <div>
        {sickNm.split(searchString)[0]}
        <mark>{searchString}</mark>
        {sickNm.split(searchString)[1]}
      </div>
    );

  return <div>{sickNm}</div>;
}

export default Match;
