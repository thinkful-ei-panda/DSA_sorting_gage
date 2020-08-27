const {STORE} = require('../../helpers/store/store');
const {quickSort} = require('../../helpers/sortingFunctions/sort');

const {log} = STORE;

log(quickSort(STORE.largeIntArray));