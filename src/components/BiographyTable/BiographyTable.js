import { useState } from 'react';
import person from '../../mocks/person';
import BiographyTableView from './BiographyTableView';

export default function BiographyTable() {
  const [personRow, setPersonRow] = useState(person);

  const addRow = () => {
    setPersonRow((prevPersonRow) => [
      ...prevPersonRow,
      prevPersonRow[Math.trunc(Math.random() * prevPersonRow.length)],
    ]);
  };

  const addRowWithPushMethod = () => {
    const newRow = [...personRow];
    newRow.push(personRow[Math.trunc(Math.random() * personRow.length)]);
    setPersonRow(newRow);
  };

  const deleteRow = () => {
    const deleteRow = personRow.slice(0, personRow.length - 1);
    setPersonRow(deleteRow);
  };

  const sortWithSortMethod = () => {
    const sortRow = [...personRow].sort((a, b) => a.age - b.age);
    setPersonRow(sortRow);
  };

  const sortWithoutSortMethod = () => {
    const sortRow = [...personRow];
    for (let i = 0; i < sortRow.length; i++) {
      for (let j = 0; j < sortRow.length - 1; j++) {
        let box;
        if (sortRow[j].age > sortRow[j + 1].age) {
          box = sortRow[j + 1];
          sortRow[j + 1] = sortRow[j];
          sortRow[j] = box;
        }
      }
    }
    setPersonRow(sortRow);
  };

  return (
    <BiographyTableView
      addRow={addRow}
      addRowWithPushMethod={addRowWithPushMethod}
      deleteRow={deleteRow}
      sortWithSortMethod={sortWithSortMethod}
      sortWithoutSortMethod={sortWithoutSortMethod}
      personRow={personRow}
    />
  );
}

// Завдання: На сторінці створити таблицю з біографією за роками.
// Дані записати до масиву. Масив повинен складатися з об'єктів, щонайменше 2 рівня вкладеності.
// Зробити сортування даних за кліком (без допомоги та за допомогою функцій сортування).
// Додати дві кнопки, натисніть на першу додати новий елемент масиву,
// і видалити його по кліку на другу.
// Додати та прибрати елемент із об'єкта, вибрати елемент об'єкта за ключом.
// Переписати частину об'єкта за допомогою spread оператора.
