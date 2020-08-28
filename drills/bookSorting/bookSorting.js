const {STORE} = require('../../helpers/store/store');
const {quickSort} = require('../../helpers/sortingFunctions/sort');

const {log, booksArray} = STORE;


log(quickSort(booksArray));
