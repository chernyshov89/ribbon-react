import PropTypes from 'prop-types';

export default function FooterLinkView({ link }) {
  return (
    <li>
      <a href="#section" className="footer__link">
        {link}
      </a>
    </li>
  );
}

FooterLinkView.propTypes = {
  link: PropTypes.string.isRequired,
};
