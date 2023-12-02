import { useState } from 'react';
import Header from './components/Header/Header';
import SectionEmpower from './components/SectionEmpower/SectionEmpower';
import SectionTestimonials from './components/SectionTestimonials/SectionTestimonials';
import Slider from './components/Slider/Slider';
import SectionApp from './components/SectionApp/SectionApp';
import Footer from './components/Footer/Footer';
import BiographyTable from './components/BiographyTable/BiographyTable';
import Timer from './components/Timer/Timer';
import CountryTable from './components/CountryTable/CountryTable';
import Text from './components/Text/Text';

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
      >
        Timer
      </button>
      <Timer isStop={isShow} />
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
    </div>
  );
}

// function EmpowerButton({ btnObj }) {
//   return <button className="empower__tab">{btnObj}</button>;
// }
