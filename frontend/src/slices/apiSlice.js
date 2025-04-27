import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

// frontend/src/apiSlice.js
const baseUrl = import.meta.env.VITE_API_URL || '';
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['User'],
  endpoints: (builder) => ({})
});
