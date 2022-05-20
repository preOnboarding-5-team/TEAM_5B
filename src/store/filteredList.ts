import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFilteredListState {
  item: {
    sickCd: string;
    sickNm: string;
  }[];
}

const initialState = {
  item: [] as {
    sickCd: string;
    sickNm: string;
  }[],
};

const filteredListSlice = createSlice({
  name: 'filteredList',
  initialState,
  reducers: {
    setfilteredList: (
      state: IFilteredListState,
      action: PayloadAction<
        {
          sickCd: string;
          sickNm: string;
        }[]
      >
    ) => {
      state.item = action.payload;
    },
  },
});

export const { setfilteredList } = filteredListSlice.actions;

export default filteredListSlice.reducer;
