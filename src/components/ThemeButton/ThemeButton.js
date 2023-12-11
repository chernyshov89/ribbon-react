import { useContext } from 'react';
import { ThemeContext } from '../../context/Theme';

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button type="button" onClick={toggleTheme}>LIGHT/DARK THEME</button>
  ); 
}
