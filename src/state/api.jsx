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
    createInternaluser: build.mutation({
      query: (postData) => ({
        url: `client/insertAccount`,
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: postData
      })
    }),
    getClientaccount: build.query({
      query: () => `client/clientaccounts`,
      providesTags: ['Clientaccounts']
    }),
    createClientaccount: build.mutation({
      query: (postData) => ({
        url: `client/insertAccount`,
        method: 'POST',
        body: postData
      })
    }),
    deleteClientAccount: build.mutation({
      query: (id) => ({
        url: `client/deleteAccount/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const { useGetUserQuery, useGetCustomerQuery, useGetProductQuery, useGetClientaccountQuery, useCreateClientaccountMutation, useDeleteClientAccountMutation } = api;
//export const { useGetUserQuery, useGetCustomerQuery, useGetProductQuery, useGetClientaccountQuery, useInsertCustomerMutation } = api;
