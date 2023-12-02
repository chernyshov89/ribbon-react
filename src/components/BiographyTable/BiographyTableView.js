import styles from './BiographyTable.module.scss';
import FavoriteBookView from './FavoriteBookView';
import { v4 as uuidv4 } from 'uuid';

import cn from 'classnames';

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
  selectedId,
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
              key={person.id}
              draggable={true}
              onDragStart={(e) => handleDragStart(e, person)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDragEnd={(e) => handleDragEnd(e)}
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, person)}
            >
              <td
                className={cn(styles.tableStyle, {
                  [styles.tableCell]:
                    isSelected &&
                    selectedId === person.id &&
                    isTableData === person.name,
                })}
                onClick={() => handleOnClickTableData(person.name, person.id)}
              >
                {person.name}
              </td>
              <td
                className={cn(styles.tableStyle, {
                  [styles.tableCell]:
                    isSelected &&
                    selectedId === person.id &&
                    isTableData === person.age,
                })}
                onClick={() => handleOnClickTableData(person.age, person.id)}
              >
                {person.age}
              </td>
              <td
                className={cn(styles.tableStyle, {
                  [styles.tableCell]:
                    isSelected &&
                    selectedId === person.id &&
                    isTableData === person.city,
                })}
                onClick={() => handleOnClickTableData(person.city, person.id)}
              >
                {person.city}
              </td>
              <td
                className={cn(styles.tableStyle, {
                  [styles.tableCell]:
                    isSelected &&
                    selectedId === person.id &&
                    isTableData === person.favoriteBooks,
                })}
                onClick={() =>
                  handleOnClickTableData(person.favoriteBooks, person.id)
                }
              >
                <ul>
                  {person.favoriteBooks.map((book) => (
                    <FavoriteBookView key={uuidv4()} book={book} />
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
