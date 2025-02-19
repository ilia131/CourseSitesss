import {  createApi } from '@reduxjs/toolkit/query/react'
import apiInterceptor from '../interceptor';




export const courseApiSlice = createApi({
    reducerPath: 'courseApi',
    baseQuery: apiInterceptor,
    endpoints: builder => ({
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
        
        getTypeFilter: builder.query({
            query: () => ({
                url: '/CourseType/GetCourseTypes',
            }),
        }), 
        getCourseByTechnologyandTypeandLevel: builder.query({
            query: ({apiParams}) => ({
               url: `/Home/GetCoursesWithPagination?RowsOfPage=10000&${apiParams}`
           }),
        }),        
    }),
  });
  
export const { 
    useGetTechnologyFilterQuery, 
    useGetLevelFilterQuery, 
    useGetTypeFilterQuery,
    useGetCourseByTechnologyandTypeandLevelQuery,
} = courseApiSlice;
  