import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./features/authSlice";
import { apiSlice } from './services/api/apiSlice';
import { courseApiSlice } from './services/api/courseApiSlice';


export const configureCombinedStore = () => {
   
  const Reducer = {
      [apiSlice.reducerPath]:  apiSlice.reducer,
      auth: authReducer,
      [courseApiSlice.reducerPath]: courseApiSlice.reducer,

     
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

export type AppDispatch = ReturnType<typeof store.dispatch>;
export type RootState = ReturnType<typeof store.getState>;