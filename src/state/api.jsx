import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001' }),
  reducerPath: 'adminApi',
  tagTypes: ['user', 'customers', 'products'],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ['user']
    }),
    getCustomer: build.query({
      query: () => `client/customers`,
      providesTags: ['customers']
    }),
    getProduct: build.query({
      query: () => `client/products`,
      providesTags: ['products']
    }),
    getClientaccount: build.query({
      query: () => `client/clientaccounts`,
      providesTags: ['Clientaccounts']
    }),
    createClientaccount: build.mutation({
      query: (postData) => ({
        url: `client/insertAccount`,
        method: POST,
        body: postData
      })
    })
  })
});

export const { useGetUserQuery, useGetCustomerQuery, useGetProductQuery, useGetClientaccountQuery, useCreateClientaccountMutation } = api;
//export const { useGetUserQuery, useGetCustomerQuery, useGetProductQuery, useGetClientaccountQuery, useInsertCustomerMutation } = api;
