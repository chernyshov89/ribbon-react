import { useEffect, useState } from 'react';
import styles from '../BiographyTable/BiographyTable.module.scss';

export default function CountryTable() {
  const [dataCountry, setDataCountry] = useState([]);

  const countryNames = ['ukraine', 'germany', 'usa', 'france', 'italia'];

  useEffect(() => {
    const countryData = async function () {
      try {
        const countriesData = await Promise.all(
          countryNames.map(async (country) => {
            const res = await fetch(
              `https://restcountries.com/v3.1/name/${country}`
            );
            const data = await res.json();
            return data[0];
          })
        );

        setDataCountry(countriesData);
      } catch (err) {
        console.error(err);
      }
    };

    countryData();
  }, [countryNames]);

  return (
    <div className={styles.boxStyle}>
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
          {dataCountry.map((country) => (
            <tr>
              <td className={styles.tableStyle}>{country.name.common}</td>
              <td className={styles.tableStyle}>{country.flag}</td>
              <td className={styles.tableStyle}>{country.capital}</td>
              <td className={styles.tableStyle}>
                {country.population.toLocaleString('en-EN')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
