import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import styles from './BiographyTable.module.scss';
import FavoriteBookView from './FavoriteBookView';
import { NAME, AGE, CITY } from '../../constants/biographyTable';

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
  const { t } = useTranslation();

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
            <th className={styles.tableStyle}>{t('biographyTable.name')}</th>
            <th className={styles.tableStyle}>{t('biographyTable.age')}</th>
            <th className={styles.tableStyle}>{t('biographyTable.city')}</th>
            <th className={styles.tableStyle}>{t('biographyTable.books')}</th>
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
                    isSelected
                    && selectedId === person.id
                    && isTableData === NAME,
                })}
                onClick={() => handleOnClickTableData(NAME, person.id)}
              >
                {person.name}
              </td>
              <td
                className={cn(styles.tableStyle, {
                  [styles.tableCell]:
                    isSelected
                    && selectedId === person.id
                    && isTableData === AGE,
                })}
                onClick={() => handleOnClickTableData(AGE, person.id)}
              >
                {person.age}
              </td>
              <td
                className={cn(styles.tableStyle, {
                  [styles.tableCell]:
                    isSelected
                    && selectedId === person.id
                    && isTableData === CITY,
                })}
                onClick={() => handleOnClickTableData(CITY, person.id)}
              >
                {person.city}
              </td>
              <td
                className={cn(styles.tableStyle, {
                  [styles.tableCell]:
                    isSelected
                    && selectedId === person.id
                    && isTableData === person.favoriteBooks,
                })}
                onClick={() => handleOnClickTableData(person.favoriteBooks, person.id)}
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
          {t('biographyTable.button.addRow')}
        </button>
        <button type="button" onClick={deleteRow}>
          {t('biographyTable.button.deleteRow')}
        </button>
        <button type="button" onClick={sortWithSortMethod}>
          {t('biographyTable.button.sortRow')}
        </button>
      </div>
    </div>
  );
}

BiographyTableView.propTypes = {
  addRow: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
  sortWithSortMethod: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  selectedRow: PropTypes.number.isRequired,
  handleOnClickTableData: PropTypes.func.isRequired,
  isTableData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleDragStart: PropTypes.func.isRequired,
  handleDragLeave: PropTypes.func.isRequired,
  handleDragEnd: PropTypes.func.isRequired,
  handleDragOver: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
  personRow: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
      favoriteBooks: PropTypes.arrayOf(
        PropTypes.shape({
          author: PropTypes.string.isRequired,
          book: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};
