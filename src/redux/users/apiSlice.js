import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users?__example=all',
    }),
    getUsersByDepartment: builder.query({
      query: (department) => `/users?__example=${department}`,
    }),
  }),
})

export const { useGetUsersQuery, useGetUsersByDepartmentQuery } = apiSlice
