import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/name/' }),
  endpoints: () => ({}),
});

export default countryApi;
