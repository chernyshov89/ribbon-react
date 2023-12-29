import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countries/slice';

export default configureStore({
  reducer: { 
    country: countryReducer, 
  }
});
