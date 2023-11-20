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
  handleOnClickTableData,
  isTableData,
  isSelected,
  handleDragStart,
  handleDragLeave,
  handleDragEnd,
  handleDragOver,
  handleDrop,
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
            {/* {Object.keys(personRow[0]).map((person, i) => (
              <th className={styles.tableStyle} key={i}>
                {person}
              </th>
            ))} */}
            <th className={styles.tableStyle}>Name</th>
            <th className={styles.tableStyle}>Age</th>
            <th className={styles.tableStyle}>City</th>
            <th className={styles.tableStyle}>Favorite Books</th>
          </tr>
        </thead>

        <tbody>
          {personRow.map((person, i) => (
            <tr
              className={`${
                i === selectedRow ? styles.selectedRow : styles.rowStyle
              }`}
              draggable={true}
              onDragStart={(e) => handleDragStart(e, person)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDragEnd={(e) => handleDragEnd(e)}
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, person)}
            >
              <td
                className={`${styles.tableStyle} ${
                  isSelected && isTableData === person.name
                    ? styles.tableCell
                    : ''
                }`}
                onClick={() => handleOnClickTableData(person.name)}
              >
                {person.name}
              </td>
              <td
                className={`${styles.tableStyle} ${
                  isSelected && isTableData === person.age
                    ? styles.tableCell
                    : ''
                }`}
                onClick={() => handleOnClickTableData(person.age)}
              >
                {person.age}
              </td>
              <td
                className={`${styles.tableStyle} ${
                  isSelected && isTableData === person.city
                    ? styles.tableCell
                    : ''
                }`}
                onClick={() => handleOnClickTableData(person.city)}
              >
                {person.city}
              </td>
              <td
                className={`${styles.tableStyle} ${
                  isSelected && isTableData === person.favoriteBooks
                    ? styles.tableCell
                    : ''
                }`}
                onClick={() => handleOnClickTableData(person.favoriteBooks)}
              >
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
