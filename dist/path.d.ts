export declare function getByArray(path: string[]): any | null;
export declare function getByString(path: string): any | null;
export declare function byString(path: string, obj: {}): any | null;
export declare function hasValueInObjectArray(valueKey: string, value: any, arrayOfObjects: any[]): boolean;
export declare const ObjectAttribute: {
    getByArray: typeof getByArray;
    getByString: typeof getByString;
    byString: typeof byString;
    hasValueInObjectArray: typeof hasValueInObjectArray;
};
