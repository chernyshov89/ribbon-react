import { useState } from 'react';

import agentPhoto from '../../img/agent-photo.jpeg';
import dogPhoto from '../../img/dog.png';

export default function SectionTestimonials() {
  const [purchasedCount, setPurchasedCount] = useState(7000);
  const [agentsCount, setAgentsCount] = useState(30000);
  const [buyingPowerCount, setBuyingPowerCount] = useState(5);

  return (
    <section className="section-testimonials" id="section--2">
      <div className="testimonials">
        <h2 className="heading-secondary testimonials__heading u-margin-bottom-biggest">
          You&apos;re in good company
        </h2>
        <p className="testimonials__text">
          “Ribbon is a huge advantage for you as the buyer's agent - and
          definitely gives you the extra edge needed to have your buyer's offer
          accepted."
        </p>

        <div className="testimonials__details">
          <img
            src={agentPhoto}
            alt="agent photo"
            className="testimonials__photo"
          />
          <h4 className="heading-4 testimonials__name">Edgar Gonzalez</h4>
          <p className="testimonials__company">eXp Realty</p>
        </div>
        <div className="testimonials__comment">
          Agents love us because we empower their buyers with cash and don't
          compete for their commissions.
        </div>
        <button className="btn-white testimonials__btn">Learn More</button>
        <div className="testimonials__numbers">
          <div
            className="testimonials__number"
            onClick={() =>
              setPurchasedCount(
                (prevPurchasedCount) => prevPurchasedCount + 100
              )
            }
          >
            <h5>{purchasedCount}+</h5>
            <p>Homes Purchased</p>
          </div>
          <div className="testimonials__number">
            <h5>{agentsCount}+</h5>
            <p>Agents</p>
          </div>
          <div className="testimonials__number">
            <h5>${buyingPowerCount} B+</h5>
            <p>Buying Power</p>
          </div>
        </div>

        <img src={dogPhoto} alt="dog" className="testimonials__img" />
      </div>
    </section>
  );
}
