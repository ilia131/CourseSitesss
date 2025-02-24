import {  createApi ,  fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import  {apiInterceptor} from '../../interceptor'
// interface LoginRequest {
//     phoneOrGmail:string;
//     password: string;
// }



// interface LoginResponse {
//     id: string;
//     token: string;
//     success: boolean;

// }



export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: apiInterceptor,
    endpoints: builder => ({
    editprofileinfo : builder.mutation({
        query: (values) => ({
            url: '/SharePanel/UpdateProfileInfo',
            method: 'PUT',
            body: values
        }),
      }),
    }),
    
})



export const {
  useEditprofileinfoMutation,
} = apiSlice