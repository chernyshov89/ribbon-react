import PropTypes from 'prop-types';
import styles from '../Text/Text.module.scss';
import withMoreLess from '../../hocs/withMoreLess';

function Text2({ handleMore, isMore }) {
  const showMore = 'Show More';
  const showLess = 'Show Less';

  const text = `This classic fable (story) is about a very slow tortoise (turtle) and a speedy hare (rabbit). 
                The tortoise challenges the hare to a race. The hare laughs at the idea that a tortoise 
                could run faster than him, but the race ends with a surprising result.`;

  const displayText = isMore ? text : `${text.split(' ').slice(0, 15).join(' ')}...`;

  return (
    <div className={styles.text}>
      <span className="header__text">{displayText}</span>
      <button type="button" onClick={handleMore}>{isMore ? showLess : showMore}</button>
    </div>
  );
}

Text2.propTypes = {
  handleMore: PropTypes.func.isRequired,
  isMore: PropTypes.bool.isRequired
};

export default withMoreLess(Text2);
