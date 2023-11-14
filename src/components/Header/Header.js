/* eslint-disable */

import Navigation from '../Navigation/Navigation';
import { featuredInLogos } from '../../constants/general';
import iconCancel from '../../img/sprite.svg#icon-cancel';
import iconMenu from '../../img/sprite.svg#icon-menu';

import headerImg from '../../img/hero-image.png';

export default function Header() {
  return (
    <header className="header">
      <Navigation />

      <button className="btn-mobile-nav">
        <svg className="icon-mobile-nav" id="open">
          <use href={iconMenu} />
        </svg>
        <svg className="icon-mobile-nav" id="close">
          <use href={iconCancel} />
        </svg>
      </button>

      <div className="header__title">
        <h1 className="heading-primary u-margin-bottom-big">
          Providing certainty on the journey to homeownership.
        </h1>
        <p className="header__text u-margin-bottom-small">
          Guarantee your home closes with cash-backed, contingency-free offers
          for buyers, sellers, their agents, and loan officers.
        </p>
        <div className="header__btn-box u-margin-bottom-large">
          <a href="#!" className="btn">
            Sign Up Now
          </a>
          <a href="#!" className="btn-text btn--scroll-to">
            Learn More
          </a>
        </div>
        <h4 className="heading-4 testimonials__featuredin-text">Featured in</h4>
        <div className="header__featuredin-logos">
          {featuredInLogos.map(({ logo, alt }) => (
            <img key={alt} src={logo} alt={alt} />
          ))}
        </div>
        <img src={headerImg} alt="header image" className="header__img" />
      </div>
    </header>
  );
}
