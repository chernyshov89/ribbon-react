import Header from './components/Header/Header';
import SectionEmpower from './components/SectionEmpower/SectionEmpower';
import SectionTestimonials from './components/SectionTestimonials/SectionTestimonials';
import Slider from './components/Slider/Slider';
import SectionApp from './components/SectionApp/SectionApp';
import Footer from './components/Footer/Footer';
import BiographyTable from './components/BiographyTable/BiographyTable';
import Timer from './components/Timer/Timer';

export default function App() {
  return (
    <div>
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
    </div>
  );
}

// function EmpowerButton({ btnObj }) {
//   return <button className="empower__tab">{btnObj}</button>;
// }
