import { useContext } from 'react';
import { ThemeContext } from '../../context/Theme';
import { DARK, LIGHT } from '../../constants/theme';

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === LIGHT ? DARK : LIGHT);
  };

  return (
    <button type="button" onClick={toggleTheme}>LIGHT/DARK THEME</button>
  ); 
}
