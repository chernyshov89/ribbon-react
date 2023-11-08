import { useState } from 'react';

const person = [
  {
    name: 'John',
    age: 37,
    city: 'London',
    favoriteBooks: [
      { author: 'Stephen King', book: 'Misery' },
      { author: 'Rowling', book: 'Quidditch Through the Ages' },
    ],
  },
  {
    name: 'Alice',
    age: 30,
    city: 'New York',
    favoriteBooks: [
      { author: 'Stephen King', book: 'Outsider' },
      { author: 'Rowling', book: 'The tales of beedle the bard' },
    ],
  },
  {
    name: 'Matilda',
    age: 23,
    city: 'Brooklyn',
    favoriteBooks: [
      { author: 'Stephen King', book: 'It' },
      { author: 'Rowling', book: 'Harry Potter' },
    ],
  },
];

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
    <div className="boxStyle">
      <table className="tableStyle">
        <thead>
          <tr>
            {Object.keys(person[0]).map((person, i) => (
              <th className="tableStyle" key={i}>
                {person}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {personRow.map((person, i) => (
            <tr key={i}>
              <td className="tableStyle">{person.name}</td>
              <td className="tableStyle">{person.age}</td>
              <td className="tableStyle">{person.city}</td>
              <td className="tableStyle">
                <ul>
                  {person.favoriteBooks.map((book, i) => (
                    <li key={i}>{`${book.author}: ${book.book}`}</li>
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

// Завдання: На сторінці створити таблицю з біографією за роками.
// Дані записати до масиву. Масив повинен складатися з об'єктів, щонайменше 2 рівня вкладеності.
// Зробити сортування даних за кліком (без допомоги та за допомогою функцій сортування).
// Додати дві кнопки, натисніть на першу додати новий елемент масиву,
// і видалити його по кліку на другу.
// Додати та прибрати елемент із об'єкта, вибрати елемент об'єкта за ключом.
// Переписати частину об'єкта за допомогою spread оператора.
