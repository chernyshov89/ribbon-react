import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry } from '../../store/countries/slice';

import styles from '../BiographyTable/BiographyTable.module.scss';

export default function CountryTable() {
  const dispatch = useDispatch();
  const countryDates = useSelector((state) => state.country.data);
  const { status, error } = useSelector((state) => state.country);

  const countryNames = ['ukraine', 'germany', 'usa', 'france', 'italia'];

  useEffect(() => {
    dispatch(fetchCountry(countryNames));
  }, [dispatch]);

  return (
    <div className={styles.boxStyle}>

      {status === 'loading' && <h2 style={{ fontSize: '50px' }}>Loading...</h2>}
      {error && (
      <h2>
        An error occured: 
        {error}
      </h2>
      )}
          
      <table className={styles.tableStyle}>
        <thead>
          <tr>
            <th className={styles.tableStyle}>Country</th>
            <th className={styles.tableStyle}>Flag</th>
            <th className={styles.tableStyle}>Capital</th>
            <th className={styles.tableStyle}>Population</th>
          </tr>
        </thead>
        <tbody>
      
          {countryDates.map(({
            name, flag, capital, population 
          }) => (
            <tr key={uuidv4()}>
              <td className={styles.tableStyle}>{name.common}</td>
              <td className={styles.tableStyle}>{flag}</td>
              <td className={styles.tableStyle}>{capital}</td>
              <td className={styles.tableStyle}>
                {population.toLocaleString('en-EN')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
