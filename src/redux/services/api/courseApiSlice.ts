import {  createApi ,  fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import apiInterceptor from '../interceptor';




export const courseApiSlice = createApi({
    reducerPath: 'courseApi',
    baseQuery: apiInterceptor,
    endpoints: builder => ({
        getAllCourses: builder.query({
            query: () => ({
                url: '/Home/GetCoursesWithPagination?RowsOfPage=1000',
            }),
        }),
    
        getTechnologyFilter: builder.query({
            query: () => ({
                url: '/Home/GetTechnologies',
            }),
        }),
    
        getLevelFilter: builder.query({
            query: () => ({
                url: '/CourseLevel/GetAllCourseLevel',
            }),
        }), 
        
        getCourseByTechnoloy: builder.query({
            query: ({ techcount, count }: { techcount: number; count: any }) => ({
                url: `/Home/GetCoursesWithPagination?TechCount=${techcount}&ListTech=${count}`,
            }),
          }),      
    }),
  });
  
export const { 
    useGetAllCoursesQuery, 
    useGetTechnologyFilterQuery, 
    useGetCourseByTechnoloyQuery, 
    useGetLevelFilterQuery, 
} = courseApiSlice;
  