"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getByArray(path) {
    return (obj) => {
        return path.reduce(attributeReducer, obj);
    };
}
exports.getByArray = getByArray;
function getByString(path) {
    return (obj) => {
        return path.split('.').reduce(attributeReducer, obj);
    };
}
exports.getByString = getByString;
function byString(path, obj) {
    return path.split('.').reduce(attributeReducer, obj);
}
exports.byString = byString;
function hasValueInObjectArray(valueKey, value, arrayOfObjects) {
    return arrayOfObjects.some((el) => {
        return el[valueKey] === value;
    });
}
exports.hasValueInObjectArray = hasValueInObjectArray;
;
function attributeReducer(attr, key) {
    return (attr && attr[key]) ? attr[key] : null;
}
exports.ObjectAttribute = {
    getByArray,
    getByString,
    byString,
    hasValueInObjectArray
};
