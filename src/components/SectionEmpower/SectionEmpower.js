import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import houseImg from '../../img/house.png';
import { empowerIconList } from '../../constants/general';

const empowerButton = [
  'empower.button.buyersAgents',
  'empower.button.buyers',
  'empower.button.listingAgents',
  'empower.button.sellers',
  'empower.button.loanOfficers',
 
];

export default function SectionEmpower() {
  const { t } = useTranslation();
  return (
    <section className="section-empower" id="section--1">
      <div className="empower">
        <h2 className="heading-secondary u-margin-bottom-big">
          {t('empower.heading')}
        </h2>
        <div className="empower__tab-container">
          {empowerButton.map((btn) => (
            <EmpowerButton key={uuidv4()}>{t(btn)}</EmpowerButton>
          ))}
        </div>
      </div>

      <div className="empower__content empower__content--1 empower__content--active">
        <div className="empower__img">
          <img src={houseImg} alt="pair near house" />
        </div>
        <div className="empower__text--container">
          <p className="empower__buyers-text">{t('empower.buyersAgents.buyersAgents')}</p>
          <h3 className="heading-tertiary empower__heading">
            {t('empower.buyersAgents.cardHeading')}
          </h3>
          <p className="empower__text">
            {t('empower.buyersAgents.subHeading')}
          </p>
          <a href="#!" className="btn empower__btn">
            {t('empower.buyersAgents.cardButton')}
          </a>
        </div>

        <div className="empower__icon--container">
          {empowerIconList.map(({ icon, alt, name }) => (
            <div key={uuidv4()} className="empower__icon--item">
              <div className="empower__icon">
                <img src={icon} alt={alt} />
              </div>
              <p>{t(name)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="empower__content empower__content--2">
        <div className="empower__img">
          <img src={houseImg} alt="pair near house" />
        </div>
        <div className="empower__text--container">
          <p className="empower__buyers-text">{t('empower.buyers.buyers')}</p>
          <h3 className="heading-tertiary empower__heading">{t('empower.buyers.cardHeading')}</h3>
          <p className="empower__text">
            {t('empower.buyers.subHeading')}
          </p>
          <a href="#!" className="btn empower__btn">
            {t('empower.buyers.cardButton')}
          </a>
        </div>

        <div className="empower__icon--container">
          {empowerIconList.map(({ icon, alt, name }) => (
            <div key={uuidv4()} className="empower__icon--item">
              <div className="empower__icon">
                <img src={icon} alt={alt} />
              </div>
              <p>{t(name)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="empower__content empower__content--3">
        <div className="empower__img">
          <img src={houseImg} alt="pair near house" />
        </div>
        <div className="empower__text--container">
          <p className="empower__buyers-text">{t('empower.listingAgents.listingAgents')}</p>
          <h3 className="heading-tertiary empower__heading">{t('empower.listingAgents.cardHeading')}</h3>
          <p className="empower__text">
            {t('empower.listingHeading.subHeading')}
          </p>
          <a href="#!" className="btn empower__btn">
            {t('empower.listingAgents.cardButton')}
          </a>
        </div>

        <div className="empower__icon--container">
          {empowerIconList.map(({ icon, alt, name }) => (
            <div key={uuidv4()} className="empower__icon--item">
              <div className="empower__icon">
                <img src={icon} alt={alt} />
              </div>
              <p>{t(name)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="empower__content empower__content--4">
        <div className="empower__img">
          <img src={houseImg} alt="pair near house" />
        </div>
        <div className="empower__text--container">
          <p className="empower__buyers-text">{t('empower.sellers.sellers')}</p>
          <h3 className="heading-tertiary empower__heading">{t('empower.sellers.cardHeading')}</h3>
          <p className="empower__text">
            {t('empower.sellers.subheading')}
          </p>
          <a href="#!" className="btn empower__btn">
            {t('empower.sellers.cardButton')}
          </a>
        </div>

        <div className="empower__icon--container">
          {empowerIconList.map(({ icon, alt, name }) => (
            <div key={uuidv4()} className="empower__icon--item">
              <div className="empower__icon">
                <img src={icon} alt={alt} />
              </div>
              <p>{t(name)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="empower__content empower__content--5">
        <div className="empower__img">
          <img src={houseImg} alt="pair near house" />
        </div>
        <div className="empower__text--container">
          <p className="empower__buyers-text">{t('empower.loanOfficers.loanOfficers')}</p>
          <h3 className="heading-tertiary empower__heading">{t('empower.loanOfficers.cardHeading')}</h3>
          <p className="empower__text">
            {t('empower.loanOfficers.subHeading')}
          </p>
          <a href="#!" className="btn empower__btn">
            {t('empower.loanOfficers.cardButton')}
          </a>
        </div>

        <div className="empower__icon--container">
          {empowerIconList.map(({ icon, alt, name }) => (
            <div key={uuidv4()} className="empower__icon--item">
              <div className="empower__icon">
                <img src={icon} alt={alt} />
              </div>
              <p>{t(name)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmpowerButton({ children }) {
  return (
    <button type="button" className="empower__tab">
      { children }
    </button>
  );
}

EmpowerButton.propTypes = {
  children: PropTypes.string.isRequired,
};
