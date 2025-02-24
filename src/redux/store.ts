import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./features/authSlice";
import filtersReducer from './features/coursesSlice'
import { apiSlice } from './services/api/apiSlice';
import { courseApiSlice } from './services/api/courseApiSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import accordionReducer from './features/accordionSlice'
import cardViewReducer from './features/courseViewSlice'
import sidebarfilterReducer from './features/sidbarfilterSlice'


export const configureCombinedStore = () => {
   
  const Reducer = {
      [apiSlice.reducerPath]:  apiSlice.reducer,
      auth: authReducer,
      [courseApiSlice.reducerPath]: courseApiSlice.reducer,
      filters: filtersReducer,
      accordion: accordionReducer,
      cardView: cardViewReducer,
      sideBarfilter: sidebarfilterReducer,
  };

  const Middleware = (getDefaultMiddleware : any) => {
      const apiSliceMiddleware = apiSlice.middleware;
      const courseApiSliceMiddleware = courseApiSlice.middleware;

      return getDefaultMiddleware().concat(apiSliceMiddleware , courseApiSliceMiddleware)
  };

  return configureStore({
      reducer: Reducer,
      middleware: Middleware,
  });
};

export const store = configureCombinedStore();


export type RootState = ReturnType<(typeof store)['getState']>;
export type AppDispatch = (typeof store)['dispatch'];
