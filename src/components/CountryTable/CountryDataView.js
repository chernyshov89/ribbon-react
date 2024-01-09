import PropTypes from 'prop-types';
import useGetCountryQuery from '../../store/slices/country/country';
import styles from '../BiographyTable/BiographyTable.module.scss';

export default function CountryDataView({ country }) {
  const { data, error, status } = useGetCountryQuery(country);

  if (error) {
    return (
      <p>
        An error occurred:
        {error}
      </p>
    );
  }

  if (!data) {
    return null; 
  }

  return (
    <tr>
      <td className={styles.tableStyle}>
        {status === 'fulfilled' 
      && data[0].name.common}

      </td>
      <td className={styles.tableStyle}>{status === 'fulfilled' && data[0].flag}</td>
      <td className={styles.tableStyle}>{status === 'fulfilled' && data[0].capital}</td>
      <td className={styles.tableStyle}>
        {status === 'fulfilled' && data[0].population.toLocaleString('en-EN')}
      </td>
    </tr>
  );
}

CountryDataView.propTypes = {
  country: PropTypes.string.isRequired,
};
