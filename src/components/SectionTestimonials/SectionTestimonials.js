import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import agentPhoto from '../../img/agent-photo.jpeg';
import dogPhoto from '../../img/dog.png';

export default function SectionTestimonials() {
  const [purchasedCount, setPurchasedCount] = useState(7000);
 
  const { t } = useTranslation();

  return (
    <section className="section-testimonials" id="section--2">
      <div className="testimonials">
        <h2 className="heading-secondary testimonials__heading u-margin-bottom-biggest">
          {t('testimonials.heading')}
        </h2>
        <p className="testimonials__text">
          {t('testimonials.testimonial')}
        </p>

        <div className="testimonials__details">
          <img src={agentPhoto} alt="agent" className="testimonials__photo" />
          <h4 className="heading-4 testimonials__name">{t('testimonials.name')}</h4>
          <p className="testimonials__company">{t('testimonials.position')}</p>
        </div>
        <div className="testimonials__comment">
          {t('testimonials.subHeading')}
        </div>
        <button type="button" className="btn-white testimonials__btn">
          {t('testimonials.button')}
        </button>
        <div className="testimonials__numbers">
          <div
            className="testimonials__number"
            role="button"
            tabIndex={0}
            onClick={() => setPurchasedCount(
              (prevPurchasedCount) => prevPurchasedCount + 100,
            )}
            onKeyDown={(e) => {
              if (e.key === 'Space') {
                setPurchasedCount(
                  (prevPurchasedCount) => prevPurchasedCount + 100,
                );
              }
            }}
          >
            <h5>
              {purchasedCount}
              +
            </h5>
            <p>{t('testimonials.overallNumbers.homesPurchased')}</p>
          </div>
          <div className="testimonials__number">
            <h5>3000 +</h5>
            <p>{t('testimonials.overallNumbers.agents')}</p>
          </div>
          <div className="testimonials__number">
            <h5>$5 B+</h5>
            <p>{t('testimonials.overallNumbers.buyingPower')}</p>
          </div>
        </div>

        <img src={dogPhoto} alt="dog" className="testimonials__img" />
      </div>
    </section>
  );
}
