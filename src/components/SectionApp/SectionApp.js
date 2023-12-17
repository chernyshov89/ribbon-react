import { useTranslation } from 'react-i18next';
import AppStoreIcon from '../../img/app-store.png';
import iphoneImg from '../../img/iphone.png';

export default function SectionApp() {
  const { t } = useTranslation();

  return (
    <section className="section-app" id="section--4">
      <div className="app">
        <div className="app__description">
          <h2 className="app__heading">
            {t('sectionApp.heading')}
          </h2>
          <p className="app__text">
            {t('sectionApp.subHeading')}
          </p>
          <div className="app__store--logo">
            <img src={AppStoreIcon} alt="app store" />
          </div>
        </div>
        <div className="app__img">
          <img src={iphoneImg} alt="Phone" />
        </div>
      </div>
    </section>
  );
}
