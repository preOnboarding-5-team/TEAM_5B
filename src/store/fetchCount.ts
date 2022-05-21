import { createSlice } from '@reduxjs/toolkit';

interface IFetchCountState {
  count: number;
}

const initialState: IFetchCountState = {
  count: 0,
};

const fetchCountState = createSlice({
  name: 'fetchCount',
  initialState,
  reducers: {
    addFetchCount: (state: IFetchCountState) => {
      state.count += 1;
    },
  },
});

export const { addFetchCount } = fetchCountState.actions;

export default fetchCountState.reducer;
