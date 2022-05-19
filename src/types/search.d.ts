export interface IItem {
  sickCd: string;
  sickNm: string;
}

export interface IGetDissRes {
  response: {
    header: { resultCode: string; resultMsg: string };
    body: {
      items: { item: IItem[] };
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
}
