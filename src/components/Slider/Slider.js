import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import arrowLeftIcon from '../../img/arrow-left.png';
import arrowRightIcon from '../../img/arrow-right.png';
import familyImg from '../../img/family.png';
import slideLogo from '../../img/slide-logo.png';
import slideLogo2 from '../../img/slide-logo-2.png';
import readIcon from '../../img/read-icon.png';

const buttonSlider = [
  { name: 'slider.buttonSlider.turnOffer' },
  { name: 'slider.buttonSlider.buyBefore' },
  { name: 'slider.buttonSlider.saveDeal' },
];

export default function Slider() {
  const { t } = useTranslation();

  return (
    <section className="section-solution" id="section--3">
      <div className="solution">
        <h2 className="heading-secondary solution__heading u-margin-bottom-smallest">
          {t('slider.heading')}
        </h2>
        <div className="solution__btn-container">
          {buttonSlider.map(({ name }) => (
            <button
              key={uuidv4()}
              type="button"
              className="solution__btn solution__btn--active"
              data-solution="0"
            >
              {t(name)}
            </button>
          ))}
          {/* <button
                className="solution__btn solution__btn--active"
                data-solution="0"
              >
                Turn an offer to all cash
              </button>
              <button className="solution__btn" data-solution="1">
                Buy before you sell
              </button>
              <button className="solution__btn" data-solution="2">
                Save an existing deal
              </button> */}
        </div>

        <button type="button" className="slider__btn slider__btn--left">
          <img src={arrowLeftIcon} alt="arrow left" />
        </button>
        <button type="button" className="slider__btn slider__btn--right">
          <img src={arrowRightIcon} alt="arrow right" />
        </button>
      </div>

      <div className="slider">
        <div className="slide slide--1">
          <div className="story">
            <div className="story__left-side">
              <div className="story__left-side--img-part">
                <div className="story__img">
                  <img src={familyImg} alt="family" />
                </div>
                <div className="story__logo">
                  <img src={slideLogo} alt="logo" />
                </div>
                <p className="story__location">Orlando, Fl</p>
              </div>

              <div className="story__left-side--text-part">
                <p className="story__homewon">{t('slider.slide__1.homeWonWith')}</p>
                <div className="story__logo--2">
                  <img src={slideLogo2} alt="logo" />
                </div>
                <div className="story__text-container">
                  <h5>{t('slider.slide__1.buyer')}</h5>
                  <p>{t('slider.slide__1.buyerText')}</p>
                </div>
                <div className="story__text-container">
                  <h5>{t('slider.slide__1.seller')}</h5>
                  <p>{t('slider.slide__1.sellerText')}</p>
                </div>
              </div>
            </div>

            <div className="story__right-side">
              <h4 className="story__heading">{t('slider.slide__1.heading')}</h4>
              <p className="story__text">
                {t('slider.slide__1.subHeading')}
              </p>
              <button
                type="button"
                className="btn-white story__btn u-margin-bottom-biggest-1"
              >
                {t('slider.slide__1.button')}
              </button>
              <div className="story__icon">
                <img src={readIcon} alt="icon" />
                <p>{t('slider.slide__1.readStory')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide slide--2">
          <div className="story">
            <div className="story__left-side">
              <div className="story__left-side--img-part">
                <div className="story__img">
                  <img src={familyImg} alt="family" />
                </div>
                <div className="story__logo">
                  <img src={slideLogo} alt="logo" />
                </div>
                <p className="story__location">Orlando, Fl</p>
              </div>

              <div className="story__left-side--text-part">
                <p className="story__homewon">{t('slider.slide__2.homeWonWith')}</p>
                <div className="story__logo--2">
                  <img src={slideLogo2} alt="logo" />
                </div>
                <div className="story__text-container">
                  <h5>{t('slider.slide__2.buyer')}</h5>
                  <p>{t('slider.slide__2.buyerText')}</p>
                </div>
                <div className="story__text-container">
                  <h5>{t('slider.slide__2.seller')}</h5>
                  <p>{t('slider.slide__2.sellerText')}</p>
                </div>
              </div>
            </div>

            <div className="story__right-side">
              <h4 className="story__heading">{t('slider.slide__2.heading')}</h4>
              <p className="story__text">
                {t('slider.slide__2.subHeading')}
              </p>
              <button
                type="button"
                className="btn-white story__btn u-margin-bottom-biggest-1"
              >
                {t('slider.slide__2.button')}
              </button>
              <div className="story__icon">
                <img src={readIcon} alt="icon" />
                <p>{t('slider.slide__2.readStory')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide slide--3">
          <div className="story">
            <div className="story__left-side">
              <div className="story__left-side--img-part">
                <div className="story__img">
                  <img src={familyImg} alt="family" />
                </div>
                <div className="story__logo">
                  <img src={slideLogo} alt="logo" />
                </div>
                <p className="story__location">Orlando, Fl</p>
              </div>

              <div className="story__left-side--text-part">
                <p className="story__homewon">{t('slider.slide__3.homeWonWith')}</p>
                <div className="story__logo--2">
                  <img src={slideLogo2} alt="logo" />
                </div>
                <div className="story__text-container">
                  <h5>{t('slider.slide__3.buyer')}</h5>
                  <p>{t('slider.slide__3.buyerText')}</p>
                </div>
                <div className="story__text-container">
                  <h5>{t('slider.slide__3.seller')}</h5>
                  <p>{t('slider.slide__3.sellerText')}</p>
                </div>
              </div>
            </div>

            <div className="story__right-side">
              <h4 className="story__heading">{t('slider.slide__3.heading')}</h4>
              <p className="story__text">
                {t('slider.slide__3.subHeading')}
              </p>
              <button
                type="button"
                className="btn-white story__btn u-margin-bottom-biggest-1"
              >
                {t('slider.slide__3.button')}
              </button>
              <div className="story__icon">
                <img src={readIcon} alt="icon" />
                <p>{t('slider.slide__3.readStory')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dots" />
      </div>
    </section>
  );
}
