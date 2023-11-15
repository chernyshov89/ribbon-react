export default function BiographyTableView({
  addRow,
  addRowWithPushMethod,
  deleteRow,
  sortWithSortMethod,
  sortWithoutSortMethod,
  personRow,
}) {
  return (
    <div className="boxStyle">
      <table className="tableStyle">
        <thead>
          <tr>
            {Object.keys(personRow[0]).map((person, i) => (
              <th className="tableStyle" key={i}>
                {person}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {personRow.map((person) => (
            <tr>
              <td className="tableStyle">{person.name}</td>
              <td className="tableStyle">{person.age}</td>
              <td className="tableStyle">{person.city}</td>
              <td className="tableStyle">
                <ul>
                  {person.favoriteBooks.map((book) => (
                    <FavoriteBook book={book} />
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="boxStyle">
        <button onClick={addRow}>Add Row</button>
        <button onClick={deleteRow}>Delete Row</button>
        <button onClick={sortWithoutSortMethod}>Sort Row</button>
      </div>
    </div>
  );
}

function FavoriteBook({ book }) {
  return <li>{`${book.author}: ${book.book}`}</li>;
}
