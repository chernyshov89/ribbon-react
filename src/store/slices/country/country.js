import countryApi from '../../apis/country';

const extendedCountryApi = countryApi.injectEndpoints({
  endpoints: (build) => ({
    getCountry: build.query({
      query: (country) => country,
    })
  })
});

const { useGetCountryQuery } = extendedCountryApi;

export default useGetCountryQuery;
