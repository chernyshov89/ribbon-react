import { useTranslation } from 'react-i18next';
import LOCALS from '../../constants/locals';
import styles from '../Timer/Timer.module.scss';

export default function ToggleLanguageButton() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.text}>
      <select value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value={LOCALS.EN}>EN</option>
        <option value={LOCALS.UA}>UA</option>
      </select>
    </div>
  );
}
