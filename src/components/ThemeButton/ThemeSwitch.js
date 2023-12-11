import { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../../context/Theme';
import { DARK, LIGHT } from '../../constants/theme';

export default function ThemeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === LIGHT ? DARK : LIGHT);
  };
  return (
    <ReactSwitch
      onChange={toggleTheme}
      checked={theme === DARK}
     
    />
  );
}
