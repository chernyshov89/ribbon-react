import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { navLinks } from '../../constants/general';

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <ul className="nav__links">
        {navLinks.map((link, i) => (
          <li key={uuidv4()} className="nav__item">
            <a
              href={`#section--${i + 1}`}
              className={`nav__link ${i === navLinks.length - 1 ? 'btn' : ''}`}
            >
              {t(link)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
