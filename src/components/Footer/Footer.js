/* eslint-disable */
import { useState } from 'react';

import footerLogo1 from '../../img/footer-logo--1.png';
import footerLogo2 from '../../img/footer-logo--2.png';
import facebookIcon from '../../img/facebook-icon.png';
import instagramIcon from '../../img/instagram-icon.png';

const footerList = [
  { name: 'Agents', links: ['Buying', 'Listing', 'IOS App', 'Get Certified'] },
  {
    name: 'Homebuyers',
    links: [
      'Buyers',
      'Buy Before You Sell',
      'New Construction',
      'Rescue Your Closing',
      'Sellers',
    ],
  },
  { name: 'Partners', links: ['Lenders', 'Builders', 'Brokerages'] },
  {
    name: 'Resources',
    links: ['Pricing', 'FAQs', 'How it works', 'Blog', 'Guides', 'Webinars'],
  },
  { name: 'About', links: ['Mission', 'Culture', 'Careers', 'Press'] },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer>
      <div className="footer">
        <div className="footer__navigation">
          <a href="#!" className="footer__logo">
            <img src={footerLogo1} alt="logo" />
          </a>

          {footerList.map(({ name, links }) => (
            <FooterItem name={name} links={links} />
          ))}
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
              Copyright <span className="year">{currentYear}</span> Ribbon Home
              Inc, All Rights Reserved.
            </p>
          </div>
          <div className="footer__socials">
            <img src={facebookIcon} alt="facebook icon" />
            <img src={instagramIcon} alt="instagram icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterItem({ name, links }) {
  return (
    <nav className="footer__col">
      <p className="footer__heading">{name}</p>
      <ul className="footer__nav">
        {links.map((link) => (
          <FooterLink link={link} />
        ))}
      </ul>
    </nav>
  );
}

function FooterLink({ link }) {
  return (
    <li>
      <a href="#" className="footer__link">
        {link}
      </a>
    </li>
  );
}
