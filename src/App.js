import Header from './components/Header/Header';
import SectionEmpower from './components/SectionEmpower/SectionEmpower';
import SectionTestimonials from './components/SectionTestimonials/SectionTestimonials';
import Slider from './components/Slider/Slider';
import SectionApp from './components/SectionApp/SectionApp';
import Footer from './components/Footer/Footer';
import BiographyTable from './components/BiographyTable/BiographyTable';
import Timer from './components/Timer/Timer';
import { useState } from 'react';

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <button onClick={() => setIsShow((prevIsShow) => !prevIsShow)}>
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
    </div>
  );
}

// function EmpowerButton({ btnObj }) {
//   return <button className="empower__tab">{btnObj}</button>;
// }
