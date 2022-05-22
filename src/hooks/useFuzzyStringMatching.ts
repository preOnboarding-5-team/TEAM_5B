import { useEffect } from 'react';

import { setFilteredList } from 'store';
import { useAppSelector, useAppDispatch } from 'hooks';
import { data, createFuzzyMatcher } from 'utils';

export const useFuzzyStringMatching = () => {
  const dispatch = useAppDispatch();
  const searchString = useAppSelector(
    (state) => state.searchString.searchString
  );

  useEffect(() => {
    if (!searchString) return;

    const regex = createFuzzyMatcher(
      searchString.trim().replaceAll(' ', '').toLowerCase()
    );

    const resultData = data.item
      .filter((row) => {
        return regex.test(row.sickNm);
      })
      .map((row) => {
        return {
          sickCd: row.sickCd,
          sickNm: row.sickNm.replace(regex, (match, ...groups) => {
            const letters = groups.slice(0, groups.length - 2);
            let lastIndex = 0;
            const highlighted = [];
            for (let i = 0, l = letters.length; i < l; i += 1) {
              const idx = match.indexOf(letters[i], lastIndex);
              highlighted.push(match.substring(lastIndex, idx));
              highlighted.push(',');
              highlighted.push(`|${letters[i]}|`);
              highlighted.push(',');
              lastIndex = idx + 1;
            }
            return highlighted.join('');
          }),
        };
      });

    dispatch(setFilteredList(resultData));
  }, [dispatch, searchString]);
};
