import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IQueryListState {
  list: string[];
}

const initialState: IQueryListState = {
  list: [],
};

const queryListSlice = createSlice({
  name: 'queryList',
  initialState,
  reducers: {
    setQueryList: (state: IQueryListState, action: PayloadAction<string>) => {
      state.list.push(action.payload);
    },
  },
});

export const { setQueryList } = queryListSlice.actions;

export default queryListSlice.reducer;
