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
      <button
        className="btn-white"
        type="button"
        disabled={i18n.language === LOCALS.EN} 
        onClick={() => changeLanguage(LOCALS.EN)}
      >
        En
      </button>
      <button
        type="button"
        className="btn-white"
        disabled={i18n.language === LOCALS.UA} 
        onClick={() => changeLanguage(LOCALS.UA)}
      >
        Укр
      </button>
    </div>
  );
}
