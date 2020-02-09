"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const om = require('object-mapper');
function merge(fromObject, destObject, mapper) {
    return fromObject ? om(fromObject, destObject, mapper) : null;
}
exports.merge = merge;
function map(fromObject, mapper) {
    return fromObject ? om(fromObject, mapper) : null;
}
exports.map = map;
function mapTo(fromObject, toObject, mapper) {
    return fromObject ? om(fromObject, toObject, mapper) : null;
}
exports.mapTo = mapTo;
function mapArray(fromObjectArray, mapper) {
    return fromObjectArray ? fromObjectArray.map((fromObject) => exports.ObjectMapper.map(fromObject, mapper)) : [];
}
exports.mapArray = mapArray;
function mapPromise(promise, mapper) {
    return promise.then((fromObject) => {
        return new Promise(resolve => {
            resolve(exports.ObjectMapper.map(fromObject, mapper));
        });
    });
}
exports.mapPromise = mapPromise;
function mapArrayPromise(promise, mapper) {
    return promise.then((result) => {
        return new Promise(resolve => {
            resolve(exports.ObjectMapper.mapArray(result, mapper));
        });
    });
}
exports.mapArrayPromise = mapArrayPromise;
exports.ObjectMapper = {
    merge, map, mapTo, mapArray, mapPromise, mapArrayPromise
};
