const {STORE} = require('../../helpers/store/store');
const { swap, quickSort} = require('../../helpers/sortingFunctions/sort');

const {log, booksArray} = STORE;


log(quickSort(booksArray));
