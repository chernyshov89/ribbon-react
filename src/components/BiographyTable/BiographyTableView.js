import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import styles from './BiographyTable.module.scss';
import FavoriteBookView from './FavoriteBookView';
import { NAME, AGE } from '../../constants/biographyTable';

export default function BiographyTableView({
  addRow,
  deleteRow,
  sortWithSortMethod,
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
        role="grid"
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
              draggable
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
                    isTableData === NAME,
                })}
                onClick={() => handleOnClickTableData(NAME, person.id)}
              >
                {person.name}
              </td>
              <td
                className={cn(styles.tableStyle, {
                  [styles.tableCell]:
                    isSelected &&
                    selectedId === person.id &&
                    isTableData === AGE,
                })}
                onClick={() => handleOnClickTableData(AGE, person.id)}
              >
                {person.age}
              </td>
              <td
                className={cn(styles.tableStyle, {
                  [styles.tableCell]:
                    isSelected &&
                    selectedId === person.id &&
                    isTableData === 'city',
                })}
                onClick={() => handleOnClickTableData('city', person.id)}
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
        <button type="button" onClick={addRow}>
          Add Row
        </button>
        <button type="button" onClick={deleteRow}>
          Delete Row
        </button>
        <button type="button" onClick={sortWithSortMethod}>
          Sort Row
        </button>
      </div>
    </div>
  );
}

BiographyTableView.propTypes = {
  addRow: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
  sortWithSortMethod: PropTypes.func.isRequired,
  personRow: PropTypes.arrayOf.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  selectedRow: PropTypes.func.isRequired,
  handleOnClickTableData: PropTypes.func.isRequired,
  isTableData: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleDragStart: PropTypes.func.isRequired,
  handleDragLeave: PropTypes.func.isRequired,
  handleDragEnd: PropTypes.func.isRequired,
  handleDragOver: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  selectedId: PropTypes.number.isRequired,
};
