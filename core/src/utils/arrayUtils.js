import _ from 'lodash';

export function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return _.isEqual([...arr1].sort(), [...arr2].sort());
}

export const checkValidArray = (value) => Array.isArray(value);