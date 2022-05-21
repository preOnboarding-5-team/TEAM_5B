import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from 'types/search.d';
import _ from 'lodash';

interface ILocalListState {
  list: IItem[];
}

const initialState: ILocalListState = {
  list: [],
};

const localListSlice = createSlice({
  name: 'localList',
  initialState,
  reducers: {
    setLocalList: (
      state: ILocalListState,
      action: PayloadAction<IItem | IItem[]>
    ) => {
      state.list = state.list.concat(action.payload);
      state.list = _.uniqBy(state.list, 'sickNm');
    },
  },
});

export const { setLocalList } = localListSlice.actions;

export default localListSlice.reducer;
