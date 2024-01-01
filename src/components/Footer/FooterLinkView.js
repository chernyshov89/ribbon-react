import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export default function FooterLinkView({ link }) {
  const { t } = useTranslation();

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
};
