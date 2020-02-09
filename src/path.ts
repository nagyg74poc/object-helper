export function getByArray(path: string[]): (obj: object) => any | null {
    return (obj: object) => {
        return path.reduce(attributeReducer, obj);
    }
}

export function getByString(path: string): (obj: object) => any | null {
    return (obj: object) => {
        return path.split('.').reduce(attributeReducer, obj);
    }
}

export function byString(path: string, obj: {}): any | null {
    return path.split('.').reduce(attributeReducer, obj);
}

export function hasValueInObjectArray(valueKey: string, value: any, arrayOfObjects: any[]): boolean {
    return arrayOfObjects.some((el: any) => {
        return el[ valueKey ] === value;
    });
};

function attributeReducer(attr: any, key: string): any | null {
    return ( attr && attr[ key ] ) ? attr[ key ] : null;
}

export const ObjectAttribute = {
    getByArray,
    getByString,
    byString,
    hasValueInObjectArray
};