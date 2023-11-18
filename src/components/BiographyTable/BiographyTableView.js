import styles from './BiographyTable.module.scss';

export default function BiographyTableView({
  addRow,
  addRowWithPushMethod,
  deleteRow,
  sortWithSortMethod,
  sortWithoutSortMethod,
  personRow,
  handleKeyDown,
  selectedRow,
}) {
  return (
    <div className={styles.boxStyle}>
      <table
        className={styles.tableStyle}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <thead>
          <tr>
            {Object.keys(personRow[0]).map((person, i) => (
              <th className={styles.tableStyle} key={i}>
                {person}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {personRow.map((person, i) => (
            <tr
              className={`${
                i === selectedRow ? styles.selectedRow : styles.rowStyle
              }`}
            >
              <td className={styles.tableStyle}>{person.name}</td>
              <td className={styles.tableStyle}>{person.age}</td>
              <td className={styles.tableStyle}>{person.city}</td>
              <td className={styles.tableStyle}>
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
      <div className={styles.boxStyle}>
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
