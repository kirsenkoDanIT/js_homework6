'use strict'
const arr = ['hello', 'world', false, 23, '23', null, undefined, true, [1, 2, '3'], {
    name: 'value',
}];
const filterBy = (array, typeOfElem) => {
    return array.filter(elem => (typeof elem) != typeOfElem);
}

console.log(filterBy(arr, 'string'))