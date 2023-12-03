import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import person from '../../mocks/person';
import { arrowUp, arrowDown } from '../../constants/hotkey';
import BiographyTableView from './BiographyTableView';

export default function BiographyTable() {
  const [personRow, setPersonRow] = useState(person);
  const [selectedRow, setSelectedRow] = useState(0);
  const [isTableData, setIsTableData] = useState('');
  const [isSelected, setIsSelected] = useState(true);
  const [currentRow, setCurrentRow] = useState(null);

  const [selectedId, setSelectedId] = useState('');

  const addRow = () => {
    setPersonRow((prevPersonRow) => [
      ...prevPersonRow,
      {
        ...prevPersonRow[Math.trunc(Math.random() * prevPersonRow.length)],
        id: uuidv4(),
      },
    ]);
  };

  const addRowWithPushMethod = () => {
    const newRow = [...personRow];
    newRow.push(personRow[Math.trunc(Math.random() * personRow.length)]);
    setPersonRow(newRow);
  };

  const deleteRow = () => {
    const deletePersonRow = personRow.slice(0, personRow.length - 1);
    setPersonRow(deletePersonRow);
  };

  const sortWithSortMethod = () => {
    const sortRow = [...personRow].sort((a, b) => a.age - b.age);
    setPersonRow(sortRow);
  };

  const sortWithoutSortMethod = () => {
    const sortRow = [...personRow];
    for (let i = 0; i < sortRow.length; i += 1) {
      for (let j = 0; j < sortRow.length - 1; j += 1) {
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
    if (e.key === arrowDown && selectedRow < personRow.length - 1) {
      setSelectedRow((prevSelectedRow) => prevSelectedRow + 1);
    }
    if (e.key === arrowUp && selectedRow > 0) {
      setSelectedRow((prevSelectedRow) => prevSelectedRow - 1);
    }
  };

  const handleOnClickTableData = (tableCell, id) => {
    setIsSelected((prevIsSelected) => !prevIsSelected);
    setSelectedId(id);
    setIsTableData(tableCell);
  };

  const handleDragStart = (e, tableRow) => {
    setCurrentRow(tableRow);
  };

  const handleDragLeave = () => {};

  const handleDragEnd = () => {};

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, tableRow) => {
    e.preventDefault();
    setPersonRow((prevPersonRow) => {
      return prevPersonRow.map((prevPerson) => {
        if (prevPerson.id === tableRow.id) {
          return currentRow;
        }

        if (prevPerson.id === currentRow.id) {
          return tableRow;
        }

        return prevPerson;
      });
    });
  };

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
      selectedId={selectedId}
    />
  );
}
