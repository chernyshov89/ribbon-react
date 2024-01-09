import { useTranslation } from 'react-i18next';
import styles from '../BiographyTable/BiographyTable.module.scss';
import CountryDataView from './CountryDataView';

export default function CountryTable() {
  const { t } = useTranslation();

  const countryNames = ['ukraine', 'germany', 'usa', 'france', 'italia'];

  return (
    <div className={styles.boxStyle}>
      <table className={styles.tableStyle}>
        <thead>
          <tr>
            <th className={styles.tableStyle}>{t('countryTable.country')}</th>
            <th className={styles.tableStyle}>{t('countryTable.flag')}</th>
            <th className={styles.tableStyle}>{t('countryTable.capital')}</th>
            <th className={styles.tableStyle}>{t('countryTable.population')}</th>
          </tr>
        </thead>
        <tbody>
          {countryNames.map((country) => <CountryDataView key={country} country={country} />)}
        </tbody>
      </table>
    </div>
  );
}
