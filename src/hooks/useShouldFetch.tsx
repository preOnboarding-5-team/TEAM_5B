export const useShouldFetch = (searchValue: string, queryList: string[]) => {
  const searchLettersArray: string[] = searchValue.split('');

  const makeKeyFinderArray = () => {
    const searchWordsArray: string[] = [];

    let word = searchLettersArray[0];

    searchLettersArray.map((item, idx) => {
      if (idx === 0) {
        return null;
      }
      word += item;
      return searchWordsArray.push(word);
    });

    const keyFinderArray = searchLettersArray.concat(searchWordsArray);

    return keyFinderArray;
  };

  const keyFinderArray = makeKeyFinderArray();

  const isAtQueryCache = () => {
    for (let i = 0; i < keyFinderArray.length; i += 1) {
      if (queryList.includes(keyFinderArray[i])) {
        return true;
      }
    }
    return false;
  };

  return !isAtQueryCache();
};
