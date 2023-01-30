import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'adminAoi',
    baseQuery: fetchBaseQuery({ baseUrl: '/'}),
    tagTypes: ['User'],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        })
    })
})

export const {useGetUserQuery} = api
