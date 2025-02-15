import { BaseQueryFn, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiInterceptor: BaseQueryFn = async (args: FetchArgs, api, extraOptions) => {
  
  const token = localStorage.getItem('token'); 
  if (token) {
    args.headers = {
      ...args.headers,
      Authorization: `Bearer ${token}`, 
    };
  }

  try {
    const result = await fetchBaseQuery({
      baseUrl: 'https://classapi.sepehracademy.ir/api',
    })(args, api, extraOptions);

    if (result.error) {
      console.error('API error:', result.error);
    }

    return result;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};


export default apiInterceptor