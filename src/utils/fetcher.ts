import axios from 'axios';

import { IGetDissRes } from 'types/search.d';

const PROXY = window.location.hostname === 'localhost' ? '' : 'proxy';

const fetcher = async (searchText: string) => {
  try {
    const res = await axios.get<IGetDissRes>(
      `${PROXY}/B551182/diseaseInfoService/getDissNameCodeList`,
      {
        params: {
          _type: 'json',
          ServiceKey: process.env.REACT_APP_GET_DISS_API_KEY,
          numOfRows: 2000,
          sickType: 1,
          medTp: 2,
          diseaseType: 'SICK_NM',
          searchText,
        },
      }
    );
    return res.data.response.body.items.item;
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error(error);
  }
};

export { fetcher };
