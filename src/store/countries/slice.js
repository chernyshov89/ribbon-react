import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountry = createAsyncThunk(
  'country/fetchCountry',
  async (countryNames, { rejectWithValue }) => {
    const countriesData = await Promise.all(
      countryNames.map(async (country) => {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${country}`,
          );
          const [data] = await response.json();

          if (!response.ok) {
            throw new Error('ERROR ❌');
          }
          return data;
        } catch (error) {
          return rejectWithValue(error.message);
        }
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
        state.error = action.payload;
      });
  }
});

export const { addCountries } = countrySlice.actions;
export default countrySlice.reducer;
