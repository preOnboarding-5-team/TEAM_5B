import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from 'types/search.d';

export interface IFilteredListState {
  item: IItem[];
}

const initialState = {
  item: [] as IItem[],
};

const filteredListSlice = createSlice({
  name: 'filteredList',
  initialState,
  reducers: {
    setFilteredList: (
      state: IFilteredListState,
      action: PayloadAction<IItem[]>
    ) => {
      state.item = action.payload;
    },
  },
});

export const { setFilteredList } = filteredListSlice.actions;

export default filteredListSlice.reducer;
