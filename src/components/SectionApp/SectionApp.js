import AppStoreIcon from '../../img/app-store.png';
import iphoneImg from '../../img/iphone.png';

export default function SectionApp() {
  return (
    <section className="section-app" id="section--4">
      <div className="app">
        <div className="app__description">
          <h2 className="app__heading">
            Everything you need is only a tap away
          </h2>
          <p className="app__text">
            Ribbon let’s you write an offer anytime, anywhere — right from your
            mobile device.
          </p>
          <div className="app__store--logo">
            <img src={AppStoreIcon} alt="app store" />
          </div>
        </div>
        <div className="app__img">
          <img src={iphoneImg} alt="Phone" />
        </div>
      </div>
    </section>
  );
}
