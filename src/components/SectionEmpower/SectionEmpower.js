import houseImg from '../../img/house.png';
import { empowerIconList } from '../../constants/general';

const empowerButton = [
  "Buyer's agents",
  'Buyers',
  'Listing Agents',
  'Sellers',
  'Loan officers',
];

export default function SectionEmpower() {
  return (
    <section className="section-empower" id="section--1">
      <div className="empower">
        <h2 className="heading-secondary u-margin-bottom-big">
          Who we empower
        </h2>
        <div className="empower__tab-container">
          {empowerButton.map((btn) => (
            <EmpowerButton>{btn}</EmpowerButton>
          ))}
        </div>
      </div>

      <div className="empower__content empower__content--1 empower__content--active">
        <div className="empower__img">
          <img src={houseImg} alt="pair near house" />
        </div>
        <div className="empower__text--container">
          <p className="empower__buyers-text">Buyer's agents</p>
          <h3 className="heading-tertiary empower__heading">
            Give your buyers the certainty of cash
          </h3>
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
            <div className="empower__icon--item">
              <div className="empower__icon">
                <img src={icon} alt={alt} />
              </div>
              <p>{name}</p>
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
            <div className="empower__icon--item">
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
            <div className="empower__icon--item">
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
            <div className="empower__icon--item">
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
            <div className="empower__icon--item">
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
  return <button className="empower__tab">{children}</button>;
}
