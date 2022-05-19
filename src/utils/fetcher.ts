import axios from 'axios';

interface IGetDissRes {
  response: {
    header: { resultCode: string; resultMsg: string };
    body: {
      items: { item: Array<{ sickCd: string; sickNm: string }> };
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
}

// ivBH7O1ZQm7WeAqNdvlCx6Qzf62xqkBMD16Unv+hS0GhjqlaxfhF29L5eyrBM9YedmTkgiC6V/o6aaZSrY5cuQ==
const fetcher = async (searchText: string) => {
  // 배포시 수정 필요 (http://apis.data.go.kr/)
  try {
    const res = await axios.get<IGetDissRes>(
      '/B551182/diseaseInfoService/getDissNameCodeList',
      {
        params: {
          _type: 'json',
          sickType: 1,
          medTp: 2,
          diseaseType: 'SICK_NM',
          ServiceKey: process.env.REACT_APP_GET_DISS_API_KEY,
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
