import {
  createContext, useEffect, useState, useMemo
} from 'react';
import PropTypes from 'prop-types';
import { DARK, LIGHT, DARK_THEME } from '../constants/theme';

export const ThemeContext = createContext('Without provider');

export default function ToggleTheme({ children }) {
  const [theme, setTheme] = useState(LIGHT);

  useEffect(() => {
    if (theme === DARK) document.body.classList.add(DARK_THEME);
    else document.body.classList.remove(DARK_THEME);
  }, [theme]);

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  
  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

ToggleTheme.propTypes = {
  children: PropTypes.node.isRequired,
};
