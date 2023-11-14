import { navLinks } from '../../constants/general';

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        {navLinks.map((link, i) => (
          <li className="nav__item">
            <a
              href={`#section--${i + 1}`}
              className={`nav__link ${i === navLinks.length - 1 ? 'btn' : ''}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
