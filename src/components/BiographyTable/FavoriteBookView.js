import PropTypes from 'prop-types';

export default function FavoriteBook({ book }) {
  return <li>{`${book.author}: ${book.book}`}</li>;
}

FavoriteBook.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.string.isRequired,
    book: PropTypes.string.isRequired,
  }).isRequired,
};
