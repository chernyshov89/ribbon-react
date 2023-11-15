import arrowLeftIcon from '../../img/arrow-left.png';
import arrowRightIcon from '../../img/arrow-right.png';
import familyImg from '../../img/family.png';
import slideLogo from '../../img/slide-logo.png';
import slideLogo2 from '../../img/slide-logo-2.png';
import readIcon from '../../img/read-icon.png';

const buttonSlider = [
  { name: 'Turn an offer to all cash' },
  { name: 'Buy before you sell' },
  { name: 'Save an existing deal' },
];

export default function Slider() {
  return (
    <section className="section-solution" id="section--3">
      <div className="solution">
        <h2 className="heading-secondary solution__heading u-margin-bottom-smallest">
          Our solutions
        </h2>
        <div className="solution__btn-container">
          {buttonSlider.map(({ name }) => (
            <button
              className="solution__btn solution__btn--active"
              data-solution="0"
            >
              {name}
            </button>
          ))}
          {/* <button
                className="solution__btn solution__btn--active"
                data-solution="0"
              >
                Turn an offer to all cash
              </button>
              <button className="solution__btn" data-solution="1">
                Buy before you sell
              </button>
              <button className="solution__btn" data-solution="2">
                Save an existing deal
              </button> */}
        </div>

        <button className="slider__btn slider__btn--left">
          <img src={arrowLeftIcon} alt="arrow left" />
        </button>
        <button className="slider__btn slider__btn--right">
          <img src={arrowRightIcon} alt="arrow right" />
        </button>
      </div>

      <div className="slider">
        <div className="slide slide--1">
          <div className="story">
            <div className="story__left-side">
              <div className="story__left-side--img-part">
                <div className="story__img">
                  <img src={familyImg} alt="family" />
                </div>
                <div className="story__logo">
                  <img src={slideLogo} alt="logo" />
                </div>
                <p className="story__location">Orlando, Fl</p>
              </div>

              <div className="story__left-side--text-part">
                <p className="story__homewon">home won with</p>
                <div className="story__logo--2">
                  <img src={slideLogo2} alt="logo" />
                </div>
                <div className="story__text-container">
                  <h5>The buyer</h5>
                  <p>won her dream house in multiple-offers situation.</p>
                </div>
                <div className="story__text-container">
                  <h5>The seller</h5>
                  <p>got a guaranteed closing with no contingencies.</p>
                </div>
              </div>
            </div>

            <div className="story__right-side">
              <h4 className="story__heading">Turn an offer to all cash</h4>
              <p className="story__text">
                Once your buyer is preapproved, upgrade your buying power to
                cash to make your strongest offer, first.
              </p>
              <button className="btn-white story__btn u-margin-bottom-biggest-1">
                Learn more
              </button>
              <div className="story__icon">
                <img src={readIcon} alt="icon" />
                <p>Read the success story</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide slide--2">
          <div className="story">
            <div className="story__left-side">
              <div className="story__left-side--img-part">
                <div className="story__img">
                  <img src={familyImg} alt="family" />
                </div>
                <div className="story__logo">
                  <img src={slideLogo} alt="logo" />
                </div>
                <p className="story__location">Orlando, Fl</p>
              </div>

              <div className="story__left-side--text-part">
                <p className="story__homewon">home won with</p>
                <div className="story__logo--2">
                  <img src={slideLogo2} alt="logo" />
                </div>
                <div className="story__text-container">
                  <h5>The buyer</h5>
                  <p>won her dream house in multiple-offers situation.</p>
                </div>
                <div className="story__text-container">
                  <h5>The seller</h5>
                  <p>got a guaranteed closing with no contingencies.</p>
                </div>
              </div>
            </div>

            <div className="story__right-side">
              <h4 className="story__heading">Buy before you sell</h4>
              <p className="story__text">
                Once your buyer is preapproved, upgrade your buying power to
                cash to make your strongest offer, first.
              </p>
              <button className="btn-white story__btn u-margin-bottom-biggest-1">
                Learn more
              </button>
              <div className="story__icon">
                <img src={readIcon} alt="icon" />
                <p>Read the success story</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide slide--3">
          <div className="story">
            <div className="story__left-side">
              <div className="story__left-side--img-part">
                <div className="story__img">
                  <img src={familyImg} alt="family" />
                </div>
                <div className="story__logo">
                  <img src={slideLogo} alt="logo" />
                </div>
                <p className="story__location">Orlando, Fl</p>
              </div>

              <div className="story__left-side--text-part">
                <p className="story__homewon">home won with</p>
                <div className="story__logo--2">
                  <img src={slideLogo2} alt="logo" />
                </div>
                <div className="story__text-container">
                  <h5>The buyer</h5>
                  <p>won her dream house in multiple-offers situation.</p>
                </div>
                <div className="story__text-container">
                  <h5>The seller</h5>
                  <p>got a guaranteed closing with no contingencies.</p>
                </div>
              </div>
            </div>

            <div className="story__right-side">
              <h4 className="story__heading">Save an existing deal</h4>
              <p className="story__text">
                Once your buyer is preapproved, upgrade your buying power to
                cash to make your strongest offer, first.
              </p>
              <button className="btn-white story__btn u-margin-bottom-biggest-1">
                Learn more
              </button>
              <div className="story__icon">
                <img src={readIcon} alt="icon" />
                <p>Read the success story</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dots" />
      </div>
    </section>
  );
}
