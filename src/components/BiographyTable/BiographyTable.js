import { useState } from 'react';
import person from '../../mocks/person';
import BiographyTableView from './BiographyTableView';

export default function BiographyTable() {
  const [personRow, setPersonRow] = useState(person);
  const [selectedRow, setSelectedRow] = useState(0);
  const [isTableData, setIsTableData] = useState(null);
  const [isSelected, setIsSelected] = useState(true);
  const [currentRow, setCurrentRow] = useState(null);

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

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' && selectedRow < personRow.length - 1) {
      setSelectedRow((prevSelectedRow) => prevSelectedRow + 1);
    }
    if (e.key === 'ArrowUp' && selectedRow > 0) {
      setSelectedRow((prevSelectedRow) => prevSelectedRow - 1);
    }
  };

  const handleOnClickTableData = (tableCell) => {
    setIsTableData((prevIsTableData) => tableCell);
    setIsSelected((prevIsSelected) => !prevIsSelected);
  };

  function handleDragStart(e, tableRow) {
    setCurrentRow(tableRow);
  }

  function handleDragLeave() {}

  function handleDragEnd(e) {}

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e, tableRow) {
    e.preventDefault();
    setPersonRow(
      personRow.map((person) => {
        if (person.id === tableRow.id) {
          return currentRow;
        }

        if (person.id === currentRow.id) {
          return tableRow;
        }

        return person;
      })
    );
  }

  return (
    <BiographyTableView
      addRow={addRow}
      addRowWithPushMethod={addRowWithPushMethod}
      deleteRow={deleteRow}
      sortWithSortMethod={sortWithSortMethod}
      sortWithoutSortMethod={sortWithoutSortMethod}
      personRow={personRow}
      handleKeyDown={handleKeyDown}
      selectedRow={selectedRow}
      handleOnClickTableData={handleOnClickTableData}
      isTableData={isTableData}
      isSelected={isSelected}
      handleDragStart={handleDragStart}
      handleDragLeave={handleDragLeave}
      handleDragEnd={handleDragEnd}
      handleDragOver={handleDragOver}
      handleDrop={handleDrop}
    />
  );
}

// -	Зробити набір гарячих клавіш для підсвічування активного списку (Таблиця з біографією).
// -	По кліку робити елемент активним (підсвічувати бордер або змінювати колір шрифту)
// по повторному кліку робити елемент неактивним.
// -	Зробити перетягування елементів списку мишею,
// щоб можна було змінювати порядок вручну (DragAndDrop).
// -	Додати події load та error для картинки. І виводити в консоль якщо
// картинка завантажилася або сталася помилка

// Завдання: На сторінці створити таблицю з біографією за роками.
// Дані записати до масиву. Масив повинен складатися з об'єктів, щонайменше 2 рівня вкладеності.
// Зробити сортування даних за кліком (без допомоги та за допомогою функцій сортування).
// Додати дві кнопки, натисніть на першу додати новий елемент масиву,
// і видалити його по кліку на другу.
// Додати та прибрати елемент із об'єкта, вибрати елемент об'єкта за ключом.
// Переписати частину об'єкта за допомогою spread оператора.
