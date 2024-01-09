import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountry = createAsyncThunk(
  'country/fetchCountry',
  async (countryNames) => {
    const countriesData = await Promise.all(
      countryNames.map(async (country) => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${country}`,
        );
        if (!response.ok) {
          throw new Error('ERROR ❌');
        }
        const [data] = await response.json();
        return data;
      }),
    );
    return countriesData;
  }
);

const countrySlice = createSlice({
  name: 'country',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  reducers: {
    addCountries(state, action) {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.data = action.payload;
      })
      .addCase(fetchCountry.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  }
});

export const { addCountries } = countrySlice.actions;
export default countrySlice.reducer;
