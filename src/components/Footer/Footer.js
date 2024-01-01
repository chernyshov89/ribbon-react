import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';

import FooterLinkView from './FooterLinkView';

import footerLogo1 from '../../img/footer-logo--1.png';
import footerLogo2 from '../../img/footer-logo--2.png';
import facebookIcon from '../../img/facebook-icon.png';
import instagramIcon from '../../img/instagram-icon.png';

const footerList = [
  {
    name: 'footer.footerList.agents.name',
    links: [
      'footer.footerList.agents.buying', 
      'footer.footerList.agents.listing', 
      'footer.footerList.agents.IOSApp', 
      'footer.footerList.agents.getCertified'
    ] 
  },
  {
    name: 'footer.footerList.homebuyers.name',
    links: [
      'footer.footerList.homebuyers.buyers',
      'footer.footerList.homebuyers.buyBefore',
      'footer.footerList.homebuyers.newConstruction',
      'footer.footerList.homebuyers.rescueClosing',
      'footer.footerList.homebuyers.sellers',
    ],
  },
  {
    name: 'footer.footerList.partners.name',
    links: [
      'footer.footerList.partners.lenders', 
      'footer.footerList.partners.builders', 
      'footer.footerList.partners.brokerages'
    ] 
  },
  {
    name: 'footer.footerList.resources.name',
    links: [
      'footer.footerList.resources.pricing', 
      'footer.footerList.resources.FAQs', 
      'footer.footerList.resources.howItWorks', 
      'footer.footerList.resources.blog', 
      'footer.footerList.resources.guides', 
      'footer.footerList.resources.webinars'
    ],
  },
  {
    name: 'footer.footerList.about.name',
    links: [
      'footer.footerList.about.mission', 
      'footer.footerList.about.culture', 
      'footer.footerList.about.careers', 
      'footer.footerList.about.press'
    ] 
  },
];

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <div className="footer__navigation">
          <a href="#!" className="footer__logo">
            <img src={footerLogo1} alt="logo" />
          </a>

          {footerList.map(({ name, links }) => (
            <FooterItem key={uuidv4()} name={t(name)} links={links} />
          ))}
        </div>
        <div className="footer__logos">
          <div className="footer__logo-secondary">
            <img src={footerLogo2} alt="logo" />
            <p className="footer__click-review">Click for Review</p>
          </div>
          <div className="footer__text">
            <div>
              <p className="footer__text--terms">{t('footer.terms')}</p>
              <p className="footer__text--privacy">{t('footer.privacy')}</p>
            </div>
            <p className="footer__text--copyright">
              Copyright
              <span className="year">{currentYear}</span>
              Ribbon Home Inc, All Rights Reserved.
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
          <FooterLinkView key={uuidv4()} link={link} />
        ))}
      </ul>
    </nav>
  );
}

FooterItem.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};
