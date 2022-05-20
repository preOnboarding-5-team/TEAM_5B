import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IControlcursol {
  cursor: number;
}

const initialState: IControlcursol = {
  cursor: -2,
};

const controlCursor = createSlice({
  name: 'controlCursor',
  initialState,
  reducers: {
    setControlCutsor: (state, action: PayloadAction<{ cursor: number }>) => {
      state.cursor = action.payload.cursor;
    },
  },
});

export const { setControlCutsor } = controlCursor.actions;

export default controlCursor.reducer;
