/* eslint-disable no-console */
const STORE = {
  pOneArray : [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40],
  log : console.log,
  largeIntArray : [
    89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 14, 5,
    55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56,
    44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87,
    28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81,
    27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38,
    28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46,
    27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40
  ],
  display : (head) => {
    if(head === null){
      return 'no content in storage';
    }
    const nameList ={
      names : [],
    };
    let grabbyBoi = head.head;
    while(grabbyBoi){
      nameList.names.push(grabbyBoi.value);
      grabbyBoi = grabbyBoi.next;
    } 
    return nameList.names;
  },
  booksArray : [
    'Gone with the Wind',
    'Pride and Prejudice',
    'The Hobbit, or There and Back Again',
    'Wuthering Heights',
    'Little Women',
    'A Tale of Two Cities',
    'The Raven',
    'The Neverending Story',
    'The Lion, the Witch and the Wardrobe (Chronicles of Narnia, #1)',
    'Ballet Shoes',
    'The Age of Innocence',
    'The Book Thief',
    'Beyond Nostalgia',
    'The Mystery of Edwin Drood',
    'The Mill on the Floss',
    'The Family From One End Street',
    'Fairy Tales Written By Rabbits',
    'Oliver Twist',
  ],
};

module.exports = {STORE};