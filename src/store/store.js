import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countries/slice';
import countryApi from './apis/country';

export default configureStore({
  reducer: { 
    country: countryReducer, 
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countryApi.middleware)
});
