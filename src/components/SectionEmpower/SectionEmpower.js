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
          <p className="empower__buyers-text">{t('empower.buyersAgents')}</p>
          <h3 className="heading-tertiary empower__heading">
            {t('empower.cardHeading')}
          </h3>
          <p className="empower__text">
            {t('empower.subHeading')}
          </p>
          <a href="#!" className="btn empower__btn">
            {t('empower.cardButton')}
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
          <p className="empower__buyers-text">Buyers</p>
          <h3 className="heading-tertiary empower__heading">Tab 2</h3>
          <p className="empower__text">
            Waive common contingencies, including the home-sale contingency, to
            allow your buyers to make their strongest offer in any market.
          </p>
          <a href="#!" className="btn empower__btn">
            Get Certified Today
          </a>
        </div>

        <div className="empower__icon--container">
          {empowerIconList.map(({ icon, alt, name }) => (
            <div key={uuidv4()} className="empower__icon--item">
              <div className="empower__icon">
                <img src={icon} alt={alt} />
              </div>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="empower__content empower__content--3">
        <div className="empower__img">
          <img src={houseImg} alt="pair near house" />
        </div>
        <div className="empower__text--container">
          <p className="empower__buyers-text">Listing Agents</p>
          <h3 className="heading-tertiary empower__heading">Tab 3</h3>
          <p className="empower__text">
            Waive common contingencies, including the home-sale contingency, to
            allow your buyers to make their strongest offer in any market.
          </p>
          <a href="#!" className="btn empower__btn">
            Get Certified Today
          </a>
        </div>

        <div className="empower__icon--container">
          {empowerIconList.map(({ icon, alt, name }) => (
            <div key={uuidv4()} className="empower__icon--item">
              <div className="empower__icon">
                <img src={icon} alt={alt} />
              </div>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="empower__content empower__content--4">
        <div className="empower__img">
          <img src={houseImg} alt="pair near house" />
        </div>
        <div className="empower__text--container">
          <p className="empower__buyers-text">Sellers</p>
          <h3 className="heading-tertiary empower__heading">Tab 4</h3>
          <p className="empower__text">
            Waive common contingencies, including the home-sale contingency, to
            allow your buyers to make their strongest offer in any market.
          </p>
          <a href="#!" className="btn empower__btn">
            Get Certified Today
          </a>
        </div>

        <div className="empower__icon--container">
          {empowerIconList.map(({ icon, alt, name }) => (
            <div key={uuidv4()} className="empower__icon--item">
              <div className="empower__icon">
                <img src={icon} alt={alt} />
              </div>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="empower__content empower__content--5">
        <div className="empower__img">
          <img src={houseImg} alt="pair near house" />
        </div>
        <div className="empower__text--container">
          <p className="empower__buyers-text">Loan officers</p>
          <h3 className="heading-tertiary empower__heading">Tab 5</h3>
          <p className="empower__text">
            Waive common contingencies, including the home-sale contingency, to
            allow your buyers to make their strongest offer in any market.
          </p>
          <a href="#!" className="btn empower__btn">
            Get Certified Today
          </a>
        </div>

        <div className="empower__icon--container">
          {empowerIconList.map(({ icon, alt, name }) => (
            <div key={uuidv4()} className="empower__icon--item">
              <div className="empower__icon">
                <img src={icon} alt={alt} />
              </div>
              <p>{name}</p>
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
