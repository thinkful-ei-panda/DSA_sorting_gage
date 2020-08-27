const {STORE} = require('../../helpers/store/store');
const {mergeSort} = require('../../helpers/sortingFunctions/sort');

const {log, largeIntArray} = STORE;

log(mergeSort(largeIntArray));