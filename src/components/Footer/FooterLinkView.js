import PropTypes from 'prop-types';

export default function FooterLinkView({ link, t }) {
  return (
    <li>
      <a href="#section" className="footer__link">
        {t(link)}
      </a>
    </li>
  );
}

FooterLinkView.propTypes = {
  link: PropTypes.string.isRequired,
  t: PropTypes.string.isRequired,
};
