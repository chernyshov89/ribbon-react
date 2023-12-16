import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { featuredInLogos } from '../../constants/general';
// import iconCancel from '../../img/sprite.svg#icon-cancel';
// import iconMenu from '../../img/sprite.svg#icon-menu';

import headerImg from '../../img/hero-image.png';

export default function Header() {
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);

  function handleImageError() {
    setImageError(true);
  }

  function handleImageLoad() {
    console.log('Image is loaded');
  }

  return (
    <header className="header">
      <Navigation />

      <div className="header__title">
        <h1 className="heading-primary u-margin-bottom-big">
          {t('header.heading')}
        </h1>
        <p className="header__text u-margin-bottom-small">
          {t('header.subHeading')}
        </p>
        <div className="header__btn-box u-margin-bottom-large">
          <a href="#!" className="btn">
            {t('header.signUpNow')}
          </a>
          <a href="#!" className="btn-text btn--scroll-to">
            {t('header.learnMore')}
          </a>
        </div>
        <h4 className="heading-4 testimonials__featuredin-text">{t('header.featuredIn')}</h4>
        <div className="header__featuredin-logos">
          {featuredInLogos.map(({ logo, alt }) => (
            <img key={alt} src={logo} alt={alt} />
          ))}
        </div>
        {!imageError ? (
          <img
            onLoad={handleImageLoad}
            onError={handleImageError}
            src={headerImg}
            alt="House with happy families"
            className="header__img"
          />
        ) : (
          console.log('Error')
        )}
      </div>
    </header>
  );
}
