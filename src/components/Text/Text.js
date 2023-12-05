import PropTypes from 'prop-types';
import withMoreLess from '../../hocs/withMoreLess';

function Text({ handleMore, isMore }) {
  return (
    <div>
      <p className="header__text">
        Daniella Down is a British actor, voice artist, copywriter, and now, 
        a podcast maker who grew up in Hong Kong and is now based in Amsterdam. 
        {' '}
        {isMore && (
        <span>
          She has a passion for storytelling and is thrilled to be hosting, 
          producing, and editing The Monologue Podcast.
        </span>
        )}
      </p>
      
      <button type="button" onClick={handleMore}>{!isMore ? 'More' : 'Less'}</button>
    </div>
  );
}

Text.propTypes = {
  handleMore: PropTypes.func.isRequired,
  isMore: PropTypes.bool.isRequired
};

export default withMoreLess(Text);
