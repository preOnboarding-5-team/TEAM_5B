import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import filteredList, { setFilteredList } from 'store/filteredList';
import searchString, { setSearchString } from 'store/searchString';
import localList, { setLocalList } from 'store/localList';
import queryList, { setQueryList } from 'store/queryList';
import fetchCount, { addFetchCount } from 'store/fetchCount';

const rootReducer = combineReducers({
  searchString,
  filteredList,
  localList,
  queryList,
  fetchCount,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
  setFilteredList,
  setSearchString,
  setLocalList,
  setQueryList,
  addFetchCount,
};
export default store;
