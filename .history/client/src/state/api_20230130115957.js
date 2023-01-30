import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001' }),
    tagTypes: ['User', 'Products', 'Customers', 'Transactions', 'Geography', 'Sales', 'Admins',"Performance"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        }),
        getProducts: build.query({
            query: () => 'client/products',
            providesTags: ["Products"]
        }),
        getCustomers: build.query({
            query: () => 'client/customers',
            providesTags: ['Customers']
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: 'client/transactions',
                method: 'GET',
                params: { page, pageSize, search, sort }
            }),
            providesTags: ["Transactions"]
        }),
        getGeography: build.query({
            query: () => 'client/geography',
            providesTags: ["Geography"]
        }),
        getSales: build.query({
            query: () => '/sales/sales',
            providesTags: ["Sales"]
        }),
        getAdmins: build.query({
            query: 'management/admins',
            providesTags: ['Admins']
        }),
        getUserPerfomance:build.query({
            query:(id)=>`management/performance/${id}`,
            providesTags:["Performance"]

        })
    })
})

export const { 
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminsQuery
} = api
