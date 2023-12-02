import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from '../BiographyTable/BiographyTable.module.scss';

export default function CountryTable() {
  const [dataCountry, setDataCountry] = useState([]);

  const countryNames = ['ukraine', 'germany', 'usa', 'france', 'italia'];

  useEffect(() => {
    const countryData = async function () {
      try {
        const countriesData = await Promise.all(
          countryNames.map(async (country) => {
            try {
              const res = await fetch(
                `https://restcountries.com/v3.1/name/${country}`
              );
              const [data] = await res.json();

              if (!res.ok) {
                throw new Error(`ERROR ❌  ${res.status}`);
              }

              return data;
            } catch (err) {
              console.error(`Error for ${country}`, err);
              return null;
            }
          })
        );

        setDataCountry(countriesData);
      } catch (err) {
        console.error(err);
      }
    };

    countryData();
  }, []);

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
          {dataCountry.map(({ name, flag, capital, population }) => (
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
