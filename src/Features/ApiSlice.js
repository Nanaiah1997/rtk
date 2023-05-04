import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const courseApi = createApi({
    reducerPath: "courseApi",
    baseQuery : fetchBaseQuery({baseUrl:"https://reqres.in/api/"}),
    endpoints:(builder)=>({
        getAllCourse:builder.query({
            query:()=>"users?page=2",
        }),
        addALLCourse:builder.mutation({
            query: (body) => ({
                url: "users",
                method: 'POST',
                body: body
  
        }),
       


        // getSingleCourse:builder.query({
        //     query:(code)=>`tenant/cd2466f4-c40f-4a8e-ab92-617a1dac54ac/code/${code}`
        // })
    })
})
})

export const { useGetAllCourseQuery, useGetSingleCourseQuery, useAddALLCourseMutation } = courseApi;