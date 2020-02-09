const om = require('object-mapper');

export function merge<S, T>(fromObject: S, destObject: T | object, mapper: object): T | null {
    return fromObject ? om(fromObject, destObject, mapper) : null;
}

export function map<S, T>(fromObject: S, mapper: object): T | null {
    return fromObject ? om(fromObject, mapper) : null;
}

export function mapTo<S, T>(fromObject: S, toObject: T, mapper: object): T | null {
    return fromObject ? om(fromObject, toObject, mapper) : null;
}

export function mapArray<S, T>(fromObjectArray: S[], mapper: object): ( T | null )[] {
    return fromObjectArray ? fromObjectArray.map((fromObject: S) => ObjectMapper.map<S, T>(fromObject, mapper)) : [];
}

export function mapPromise<S, T>(promise: Promise<S>, mapper: object): Promise<T | null> {
    return promise.then((fromObject: S) => {
        return new Promise<T | null>(resolve => {
            resolve(ObjectMapper.map<S, T>(fromObject, mapper));
        });
    });
}

export function mapArrayPromise<S, T>(promise: Promise<S[]>, mapper: object): Promise<( T | null )[]> {
    return promise.then((result: S[]) => {
        return new Promise<( T | null )[]>(resolve => {
            resolve(ObjectMapper.mapArray<S, T>(result, mapper));
        });
    });
}

export const ObjectMapper = {
    merge, map, mapTo, mapArray, mapPromise, mapArrayPromise
};