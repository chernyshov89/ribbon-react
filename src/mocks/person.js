import { v4 as uuidv4 } from 'uuid';

const person = [
  {
    id: uuidv4(),
    name: 'John',
    age: 37,
    city: 'London',
    favoriteBooks: [
      { author: 'Stephen King', book: 'Misery' },
      { author: 'Rowling', book: 'Quidditch Through the Ages' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Alice',
    age: 30,
    city: 'New York',
    favoriteBooks: [
      { author: 'Stephen King', book: 'Outsider' },
      { author: 'Rowling', book: 'The tales of beedle the bard' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Matilda',
    age: 23,
    city: 'Brooklyn',
    favoriteBooks: [
      { author: 'Stephen King', book: 'It' },
      { author: 'Rowling', book: 'Harry Potter' },
    ],
  },
];

export default person;
