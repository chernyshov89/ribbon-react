import './i18n/index';
import Header from './components/Header/Header';
import SectionEmpower from './components/SectionEmpower/SectionEmpower';
import SectionTestimonials from './components/SectionTestimonials/SectionTestimonials';
import Slider from './components/Slider/Slider';
import SectionApp from './components/SectionApp/SectionApp';
import Footer from './components/Footer/Footer';
import BiographyTable from './components/BiographyTable/BiographyTable';
import Timer from './components/Timer/Timer';
import CountryTable from './components/CountryTable/CountryTable.1';
import Text from './components/Text/Text';
import Text2 from './components/Text2/Text2';
import ThemeSwitch from './components/ThemeButton/ThemeSwitch';
import ToggleTheme from './context/Theme';
import ToggleLanguageButton from './components/ToggleLanguage/ToggleLanguageButton';

export default function App() {
  return (
    <ToggleTheme>
      <div>
        <ThemeSwitch />
        <ToggleLanguageButton />
        <Timer />
        <Header />
        <main>
          <SectionEmpower />
          <SectionTestimonials />
          <Slider />
          <SectionApp />
        </main>
        <Footer />
        <BiographyTable />
        <CountryTable />
        <Text />
        <Text2 />
      </div>
    </ToggleTheme>
  );
}
