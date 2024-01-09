import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import FooterLinkView from './FooterLinkView';

export default function FooterItem({ name, links }) {
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
