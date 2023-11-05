import iconCancel from './img/sprite.svg#icon-cancel';
import iconMenu from './img/sprite.svg#icon-menu';

import headerImg from './img/hero-image.png';
import techcrunchLogo from './img/techcrunch-logo.png';
import allthingsLogo from './img/allthings-logo.png';
import wsjLogo from './img/wsj-logo.png';
import usatodeyLogo from './img/usatoday-logo.png';
import inmanLogo from './img/inman-logo.png';

import houseImg from './img/house.png';
import dollarIcon from './img/dollar-icon.png';
import pencilIcon from './img/pencil-icon.png';
import dollarInIcon from './img/dollar-in-icon.png';

import agentPhoto from './img/agent-photo.jpeg';
import dogPhoto from './img/dog.png';

import arrowLeftIcon from './img/arrow-left.png';
import arrowRightIcon from './img/arrow-right.png';
import familyImg from './img/family.png';
import slideLogo from './img/slide-logo.png';
import slideLogo2 from './img/slide-logo-2.png';
import readIcon from './img/read-icon.png';

import AppStoreIcon from './img/app-store.png';
import iphoneImg from './img/iphone.png';

import footerLogo1 from './img/footer-logo--1.png';
import footerLogo2 from './img/footer-logo--2.png';
import facebookIcon from './img/facebook-icon.png';
import instagramIcon from './img/instagram-icon.png';

import { useState } from 'react';

const empowerButton = [
  "Buyer's agents",
  'Buyers',
  'Listing Agents',
  'Sellers',
  'Loan officers',
];

export default function App() {
  const [purchasedCount, setPurchasedCount] = useState(7000);
  const [agentsCount, setAgentsCount] = useState(30000);
  const [buyingPowerCount, setBuyingPowerCount] = useState(5);

  const [appStoreLogo, setAppStoreLogo] = useState(AppStoreIcon);

  const [facebookLogo, setFaceBookLogo] = useState(facebookIcon);
  const [instagramLogo, setInstagramLogo] = useState(instagramIcon);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <ul className="nav__links">
            <li className="nav__item nav__item--active">
              <a href="#section--1" className="nav__link">
                Agents
              </a>
            </li>
            <li className="nav__item">
              <a href="#section--2" className="nav__link">
                Homebuyers
              </a>
            </li>
            <li className="nav__item">
              <a href="#section--3" className="nav__link">
                Resources
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Log In
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link btn">
                Sign Up Now
              </a>
            </li>
          </ul>
        </nav>

        <button className="btn-mobile-nav">
          <svg className="icon-mobile-nav" id="open">
            <use href={iconMenu}></use>
          </svg>
          <svg className="icon-mobile-nav" id="close">
            <use href={iconCancel}></use>
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
          <h4 className="heading-4 testimonials__featuredin-text">
            Featured in
          </h4>
          <div className="header__featuredin-logos">
            <img src={techcrunchLogo} alt="Feature In Logo 1" />
            <img src={allthingsLogo} alt="Feature In Logo 2" />
            <img src={wsjLogo} alt="Feature In Logo 3" />
            <img src={usatodeyLogo} alt="Feature In Logo 4" />
            <img src={inmanLogo} alt="Feature In Logo 4" />
          </div>
          <img src={headerImg} alt="header image" className="header__img" />
        </div>
      </header>

      <main>
        <section className="section-empower" id="section--1">
          <div className="empower">
            <h2 className="heading-secondary u-margin-bottom-big">
              Who we empower
            </h2>
            <div className="empower__tab-container">
              {/* <button
                className="empower__tab empower__tab--1 empower__tab--active"
                data-tab="1"
              >
                Buyer's agents
              </button>
              <button className="empower__tab empower__tab--2" data-tab="2">
                Buyers
              </button>
              <button className="empower__tab empower__tab--3" data-tab="3">
                Listing agents
              </button>
              <button className="empower__tab empower__tab--4" data-tab="4">
                Sellers
              </button>
              <button className="empower__tab empower__tab--5" data-tab="5">
                Loan officers
              </button> */}
              {/* {empowerButton.map((button) => (
                <button className="empower__tab">{button}</button>
              ))} */}
              {/* {empowerButton.map((btn) => (
                <EmpowerButton btnObj={btn} />
              ))} */}
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
                Waive common contingencies, including the home-sale contingency,
                to allow your buyers to make their strongest offer in any
                market.
              </p>
              <a href="#!" className="btn empower__btn">
                Get Certified Today
              </a>
            </div>

            <div className="empower__icon--container">
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={dollarIcon} alt="dollar-icon" />
                </div>
                <p>Keep Your Commission</p>
              </div>
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={pencilIcon} alt="pencil-icon" />
                </div>
                <p>Write More Winning Offers</p>
              </div>
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={dollarInIcon} alt="dollar-in-icon" />
                </div>
                <p>Guaranteed to Close</p>
              </div>
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
                Waive common contingencies, including the home-sale contingency,
                to allow your buyers to make their strongest offer in any
                market.
              </p>
              <a href="#!" className="btn empower__btn">
                Get Certified Today
              </a>
            </div>

            <div className="empower__icon--container">
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={dollarIcon} alt="dollar-icon" />
                </div>
                <p>Keep Your Commission</p>
              </div>
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={pencilIcon} alt="pencil-icon" />
                </div>
                <p>Write More Winning Offers</p>
              </div>
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={dollarInIcon} alt="dollar-in-icon" />
                </div>
                <p>Guaranteed to Close</p>
              </div>
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
                Waive common contingencies, including the home-sale contingency,
                to allow your buyers to make their strongest offer in any
                market.
              </p>
              <a href="#!" className="btn empower__btn">
                Get Certified Today
              </a>
            </div>

            <div className="empower__icon--container">
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={dollarIcon} alt="dollar-icon" />
                </div>
                <p>Keep Your Commission</p>
              </div>
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={pencilIcon} alt="pencil-icon" />
                </div>
                <p>Write More Winning Offers</p>
              </div>
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={dollarInIcon} alt="dollar-in-icon" />
                </div>
                <p>Guaranteed to Close</p>
              </div>
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
                Waive common contingencies, including the home-sale contingency,
                to allow your buyers to make their strongest offer in any
                market.
              </p>
              <a href="#!" className="btn empower__btn">
                Get Certified Today
              </a>
            </div>

            <div className="empower__icon--container">
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={dollarIcon} alt="dollar-icon" />
                </div>
                <p>Keep Your Commission</p>
              </div>
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={pencilIcon} alt="pencil-icon" />
                </div>
                <p>Write More Winning Offers</p>
              </div>
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={dollarInIcon} alt="dollar-in-icon" />
                </div>
                <p>Guaranteed to Close</p>
              </div>
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
                Waive common contingencies, including the home-sale contingency,
                to allow your buyers to make their strongest offer in any
                market.
              </p>
              <a href="#!" className="btn empower__btn">
                Get Certified Today
              </a>
            </div>

            <div className="empower__icon--container">
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={dollarIcon} alt="dollar-icon" />
                </div>
                <p>Keep Your Commission</p>
              </div>
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={pencilIcon} alt="pencil-icon" />
                </div>
                <p>Write More Winning Offers</p>
              </div>
              <div className="empower__icon--item">
                <div className="empower__icon">
                  <img src={dollarInIcon} alt="dollar-in-icon" />
                </div>
                <p>Guaranteed to Close</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-testimonials" id="section--2">
          <div className="testimonials">
            <h2 className="heading-secondary testimonials__heading u-margin-bottom-biggest">
              You&apos;re in good company
            </h2>
            <p className="testimonials__text">
              “Ribbon is a huge advantage for you as the buyer's agent - and
              definitely gives you the extra edge needed to have your buyer's
              offer accepted."
            </p>

            <div className="testimonials__details">
              <img
                src={agentPhoto}
                alt="agent photo"
                className="testimonials__photo"
              />
              <h4 className="heading-4 testimonials__name">Edgar Gonzalez</h4>
              <p className="testimonials__company">eXp Realty</p>
            </div>
            <div className="testimonials__comment">
              Agents love us because we empower their buyers with cash and don't
              compete for their commissions.
            </div>
            <button className="btn-white testimonials__btn">Learn More</button>
            <div className="testimonials__numbers">
              <div
                className="testimonials__number"
                onClick={() => setPurchasedCount(purchasedCount + 100)}
              >
                <h5>{purchasedCount}+</h5>
                <p>Homes Purchased</p>
              </div>
              <div className="testimonials__number">
                <h5>{agentsCount}+</h5>
                <p>Agents</p>
              </div>
              <div className="testimonials__number">
                <h5>${buyingPowerCount} B+</h5>
                <p>Buying Power</p>
              </div>
            </div>

            <img src={dogPhoto} alt="dog" className="testimonials__img" />
          </div>
        </section>

        <section className="section-solution" id="section--3">
          <div className="solution">
            <h2 className="heading-secondary solution__heading u-margin-bottom-smallest">
              Our solutions
            </h2>
            <div className="solution__btn-container">
              <button
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
              </button>
            </div>

            <button className="slider__btn slider__btn--left">
              <img src={arrowLeftIcon} alt="arrow left" />
            </button>
            <button className="slider__btn slider__btn--right">
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
                    <p className="story__homewon">home won with</p>
                    <div className="story__logo--2">
                      <img src={slideLogo2} alt="logo" />
                    </div>
                    <div className="story__text-container">
                      <h5>The buyer</h5>
                      <p>won her dream house in multiple-offers situation.</p>
                    </div>
                    <div className="story__text-container">
                      <h5>The seller</h5>
                      <p>got a guaranteed closing with no contingencies.</p>
                    </div>
                  </div>
                </div>

                <div className="story__right-side">
                  <h4 className="story__heading">Turn an offer to all cash</h4>
                  <p className="story__text">
                    Once your buyer is preapproved, upgrade your buying power to
                    cash to make your strongest offer, first.
                  </p>
                  <button className="btn-white story__btn u-margin-bottom-biggest-1">
                    Learn more
                  </button>
                  <div className="story__icon">
                    <img src={readIcon} alt="icon" />
                    <p>Read the success story</p>
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
                    <p className="story__homewon">home won with</p>
                    <div className="story__logo--2">
                      <img src={slideLogo2} alt="logo" />
                    </div>
                    <div className="story__text-container">
                      <h5>The buyer</h5>
                      <p>won her dream house in multiple-offers situation.</p>
                    </div>
                    <div className="story__text-container">
                      <h5>The seller</h5>
                      <p>got a guaranteed closing with no contingencies.</p>
                    </div>
                  </div>
                </div>

                <div className="story__right-side">
                  <h4 className="story__heading">Buy before you sell</h4>
                  <p className="story__text">
                    Once your buyer is preapproved, upgrade your buying power to
                    cash to make your strongest offer, first.
                  </p>
                  <button className="btn-white story__btn u-margin-bottom-biggest-1">
                    Learn more
                  </button>
                  <div className="story__icon">
                    <img src={readIcon} alt="icon" />
                    <p>Read the success story</p>
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
                    <p className="story__homewon">home won with</p>
                    <div className="story__logo--2">
                      <img src={slideLogo2} alt="logo" />
                    </div>
                    <div className="story__text-container">
                      <h5>The buyer</h5>
                      <p>won her dream house in multiple-offers situation.</p>
                    </div>
                    <div className="story__text-container">
                      <h5>The seller</h5>
                      <p>got a guaranteed closing with no contingencies.</p>
                    </div>
                  </div>
                </div>

                <div className="story__right-side">
                  <h4 className="story__heading">Save an existing deal</h4>
                  <p className="story__text">
                    Once your buyer is preapproved, upgrade your buying power to
                    cash to make your strongest offer, first.
                  </p>
                  <button className="btn-white story__btn u-margin-bottom-biggest-1">
                    Learn more
                  </button>
                  <div className="story__icon">
                    <img src={readIcon} alt="icon" />
                    <p>Read the success story</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dots"></div>
          </div>
        </section>

        <section className="section-app" id="section--4">
          <div className="app">
            <div className="app__description">
              <h2 className="app__heading">
                Everything you need is only a tap away
              </h2>
              <p className="app__text">
                Ribbon let’s you write an offer anytime, anywhere — right from
                your mobile device.
              </p>
              <div className="app__store--logo">
                <img src={appStoreLogo} alt="app store" />
              </div>
            </div>
            <div className="app__img">
              <img src={iphoneImg} alt="Phone" />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer">
          <div className="footer__navigation">
            <a href="#!" className="footer__logo">
              <img src={footerLogo1} alt="logo" />
            </a>

            <nav className="footer__col">
              <p className="footer__heading">Agents</p>
              <ul className="footer__nav">
                <li>
                  <a href="#!" className="footer__link">
                    Buying
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Listing
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    iOS App
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Get Certified
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="footer__col">
              <p className="footer__heading">Homebuyers</p>
              <ul className="footer__nav">
                <li>
                  <a href="#!" className="footer__link">
                    Buyers
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Buy Before You Sell
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    New Construction
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Rescue Your Closing
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Sellers
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="footer__col">
              <p className="footer__heading">Partners</p>
              <ul className="footer__nav">
                <li>
                  <a href="#!" className="footer__link">
                    Lenders
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Builders
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Brokerages
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="footer__col">
              <p className="footer__heading">Resources</p>
              <ul className="footer__nav">
                <li>
                  <a href="#!" className="footer__link">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Webinars
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="footer__col">
              <p className="footer__heading">About</p>
              <ul className="footer__nav">
                <li>
                  <a href="#!" className="footer__link">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Culture
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#!" className="footer__link">
                    Press
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__logos">
            <div className="footer__logo-secondary">
              <img src={footerLogo2} alt="logo" />
              <p className="footer__click-review">Click for Review</p>
            </div>
            <div className="footer__text">
              <div>
                <p className="footer__text--terms">Terms</p>
                <p className="footer__text--privacy">Privacy</p>
              </div>
              <p className="footer__text--copyright">
                Copyright <span className="year">{currentYear}</span> Ribbon
                Home Inc, All Rights Reserved.
              </p>
            </div>
            <div className="footer__socials">
              <img src={instagramLogo} alt="facebook icon" />
              <img src={facebookLogo} alt="instagram icon" />
            </div>
          </div>
        </div>
      </footer>
      <Biography />
    </div>
  );
}

// function EmpowerButton({ btnObj }) {
//   return <button className="empower__tab">{btnObj}</button>;
// }

function EmpowerButton({ children }) {
  return <button className="empower__tab">{children}</button>;
}

const person = [
  {
    name: 'John',
    age: 37,
    city: 'London',
    favoriteBooks: [
      { author: 'Stephen King', book: 'Misery' },
      { author: 'Rowling', book: 'Quidditch Through the Ages' },
    ],
  },
  {
    name: 'Alice',
    age: 30,
    city: 'New York',
    favoriteBooks: [
      { author: 'Stephen King', book: 'Outsider' },
      { author: 'Rowling', book: 'The tales of beedle the bard' },
    ],
  },
  {
    name: 'Matilda',
    age: 23,
    city: 'Brooklyn',
    favoriteBooks: [
      { author: 'Stephen King', book: 'It' },
      { author: 'Rowling', book: 'Harry Potter' },
    ],
  },
];

const tableStyle = {
  border: '1px solid black',
  borderCollapse: 'collapse',
  padding: '3px 18px',
  fontSize: '24px',
};

const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
};

function Biography() {
  const personTable = person;
  const [personRow, setPersonRow] = useState([...personTable]);

  const addRow = () => {
    setPersonRow([
      ...personRow,
      personRow[Math.trunc(Math.random() * personRow.length)],
    ]);
  };

  const addRowWithPushMethod = () => {
    const newRow = [...personRow];
    newRow.push(personRow[Math.trunc(Math.random() * personRow.length)]);
    setPersonRow(newRow);
  };

  const deleteRow = () => {
    const deleteRow = personRow.slice(0, personRow.length - 1);
    setPersonRow(deleteRow);
  };

  return (
    <div style={boxStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            {Object.keys(person[0]).map((person, i) => (
              <th style={tableStyle} key={i}>
                {person}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {personRow.map((person) => (
            <tr>
              <td style={tableStyle}>{person.name}</td>
              <td style={tableStyle}>{person.age}</td>
              <td style={tableStyle}>{person.city}</td>
              <td style={tableStyle}>
                {person.favoriteBooks.map((book) => (
                  <ul>
                    <li>{`${book.author}: ${book.book}`}</li>
                  </ul>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={boxStyle}>
        <button onClick={addRowWithPushMethod}>Add Row</button>
        <button onClick={deleteRow}>Delete Row</button>
        <button
          onClick={() =>
            setPersonRow([...personRow.sort((a, b) => a.age - b.age)])
          }
        >
          Sort Row
        </button>
      </div>
    </div>
  );
}

// Завдання: На сторінці створити таблицю з біографією за роками.
// Дані записати до масиву. Масив повинен складатися з об'єктів, щонайменше 2 рівня вкладеності.
// Зробити сортування даних за кліком (без допомоги та за допомогою функцій сортування).
// Додати дві кнопки, натисніть на першу додати новий елемент масиву,
// і видалити його по кліку на другу.
// Додати та прибрати елемент із об'єкта, вибрати елемент об'єкта за ключом.
// Переписати частину об'єкта за допомогою spread оператора.
