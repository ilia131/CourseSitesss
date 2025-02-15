import {  createApi ,  fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import  {apiInterceptor} from '../interceptor'
interface LoginRequest {
    phoneOrGmail:string;
    password: string;
}



interface LoginResponse {
    id: string;
    token: string;
    success: boolean;

}


// const baseURL = process.env.VITE_BASE_URL;

// const baseQuery = fetchBaseQuery({
//   baseUrl: baseURL,
//   credentials: 'include',
// });




export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: apiInterceptor,
    endpoints: builder => ({
    login : builder.mutation<LoginResponse, LoginRequest>({
        query: (values) => ({
            url: '/Sign/Login',
            method: 'POST',
            body: values
        }),
      }),
    }),
    
})



export const {
  useLoginMutation,
} = apiSlice