export declare function merge<S, T>(fromObject: S, destObject: T | object, mapper: object): T | null;
export declare function map<S, T>(fromObject: S, mapper: object): T | null;
export declare function mapTo<S, T>(fromObject: S, toObject: T, mapper: object): T | null;
export declare function mapArray<S, T>(fromObjectArray: S[], mapper: object): (T | null)[];
export declare function mapPromise<S, T>(promise: Promise<S>, mapper: object): Promise<T | null>;
export declare function mapArrayPromise<S, T>(promise: Promise<S[]>, mapper: object): Promise<(T | null)[]>;
export declare const ObjectMapper: {
    merge: typeof merge;
    map: typeof map;
    mapTo: typeof mapTo;
    mapArray: typeof mapArray;
    mapPromise: typeof mapPromise;
    mapArrayPromise: typeof mapArrayPromise;
};
