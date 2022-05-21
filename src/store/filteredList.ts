import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from 'types/search.d';

interface IFilteredListState {
  list: IItem[];
}

const initialState: IFilteredListState = {
  list: [],
};

const filteredListSlice = createSlice({
  name: 'filteredList',
  initialState,
  reducers: {
    setFilteredList: (
      state: IFilteredListState,
      action: PayloadAction<IItem[]>
    ) => {
      state.list = action.payload;
    },
  },
});

export const { setFilteredList } = filteredListSlice.actions;

export default filteredListSlice.reducer;
