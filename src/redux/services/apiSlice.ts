import {  createApi ,  fetchBaseQuery ,FetchArgs, FetchBaseQueryError , BaseQueryFn } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

interface LoginRequest {
    phoneOrGmail:string;
    password: string;
}

// interface Values {
//     values: LoginRequest
// }

interface LoginResponse {
    id: string;
    token: string;
    success: boolean;

}

const mutex = new Mutex();

// const baseURL = process.env.VITE_BASE_URL;

// const baseQuery = fetchBaseQuery({
//   baseUrl: baseURL,
//   credentials: 'include',
// });




export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://classapi.sepehracademy.ir/api',
    }),
    endpoints: builder => ({
    login : builder.mutation<LoginResponse, LoginRequest>({
        query: (values) => ({
            url: '/Sign/Login',
            method: 'POST',
            body: values
        }),
      }),
    })
})

export const {
  useLoginMutation
} = apiSlice