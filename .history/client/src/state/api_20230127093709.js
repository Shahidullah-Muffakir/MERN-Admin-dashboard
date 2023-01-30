import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001'}),
    tagTypes: ['User','Products'],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        }),
        getProducts:build.query({
            query:()=>'client/products',
            providesTags:["Products"]
        })
    })
})

export const {useGetUserQuery} = api
