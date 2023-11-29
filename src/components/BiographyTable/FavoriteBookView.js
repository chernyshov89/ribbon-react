export default function FavoriteBook({ book }) {
  return <li>{`${book.author}: ${book.book}`}</li>;
}
