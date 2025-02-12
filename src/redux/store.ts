import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./features/authSlice";
import { apiSlice } from './services/apiSlice';


export const configureCombinedStore = () => {
   
  const Reducer = {
      [apiSlice.reducerPath]:  apiSlice.reducer,
      auth: authReducer,
     
  };

  const Middleware = (getDefaultMiddleware : any) => {
      const apiSliceMiddleware = apiSlice.middleware;
      return getDefaultMiddleware()
          .concat(apiSliceMiddleware)
  };

  return configureStore({
      reducer: Reducer,
      middleware: Middleware,
  });
};

export const store = configureCombinedStore();

export type AppDispatch = ReturnType<typeof store.dispatch>;
export type RootState = ReturnType<typeof store.getState>;