let ObjectAttribute = require('../dist').ObjectAttribute;
let byString = ObjectAttribute.byString;
let getByArray = ObjectAttribute.getByArray;
let getByString = ObjectAttribute.getByString;
let hasValueInObjectArray = ObjectAttribute.hasValueInObjectArray;

let testObj = {
    level1: {
        level2: {
            level3: {
                level4: 'stringValue',
            },
            level2number: 54,
        },
    },
};

const testPaths = {
    case1: {
        string: 'level1.level2',
        array: ['level1', 'level2']
    },
    case2: {
        string: 'level1.level2.level2number',
        array: ['level1', 'level2', 'level2number']
    },
    case3: {
        string: 'level1.level2.level3.level4',
        array: ['level1', 'level2', 'level3', 'level4']
    },
    case4: {
        string: 'level1.level2.nonexistent',
        array: ['level1', 'level2', 'nonexistent']
    }
};

const testObjectArray = [
    {
        attribute1: 'value1-1',
        attribute2: 'value1-2',
        attribute3: 1
    },
    {
        attribute1: 'value2-1',
        attribute2: 'value2-2',
        attribute3: 2
    },
    {
        attribute1: 'value2-1',
        attribute2: 'value3-2',
        attribute3: 3
    }
];


describe('Executes byString', () => {

    it(`is defined and function`, () => {
        expect(byString).toBeDefined();
        expect(typeof byString).toBe('function');
    });

    it(`searches without path defined`, () => {
        expect(() => byString(null, testObj) ).toThrow();
    });

    test(`searches ${testPaths.case1.string}`, () => {
        let testPath = testPaths.case1.string;
        const level2Result = {
            level3: {
                level4: 'stringValue',
            },
            level2number: 54,
        };

        expect(byString(testPath, testObj)).toBeDefined();
        expect(byString(testPath, testObj)).toEqual(level2Result);

    });

    test(`searches ${testPaths.case2.string}`, () => {
        let testPath = testPaths.case2.string;
        expect(byString(testPath, testObj)).toBeDefined();
        expect(byString(testPath, testObj)).toBe(54);

    });

    test(`searches ${testPaths.case3.string}`, () => {
        let testPath = testPaths.case3.string;
        expect(byString(testPath, testObj)).toBeDefined();
        expect(byString(testPath, testObj)).toBe('stringValue');

    });

    test(`searches ${testPaths.case4.string}`, () => {
        let testPath = testPaths.case4.string;
        expect(byString(testPath, testObj)).toBeNull();
        expect(byString(testPath, testObj)).not.toBeUndefined();
    });
});

describe('Executes getByArray', () => {

    it(`is defined and function`, () => {
        expect(getByArray).toBeDefined();
        expect(typeof getByArray).toBe('function');
    });

    it(`searches without path defined`, () => {
        let testFn = getByArray(null);
        expect(() => testFn(testObj) ).toThrow();
        expect(() => testFn(null) ).toThrow();
    });

    test(`searches ${JSON.stringify(testPaths.case1.array)}`, () => {
        let testArray = testPaths.case1.array;
        const level2Result = {
            level3: {
                level4: 'stringValue',
            },
            level2number: 54,
        };
        let testFn = getByArray(testArray);
        expect(typeof testFn).toBe('function');

        const testResult = testFn(testObj);
        expect(testResult).toEqual(level2Result);

    });

    test(`searches ${JSON.stringify(testPaths.case2.array)}`, () => {
        let testArray = testPaths.case2.array;
        let testFn = getByArray(testArray);
        expect(typeof testFn).toBe('function');

        const testResult = testFn(testObj);
        expect(testResult).toBe(54);
    });

    test(`searches ${JSON.stringify(testPaths.case3.array)}`, () => {
        let testArray = testPaths.case3.array;
        let testFn = getByArray(testArray);
        expect(typeof testFn).toBe('function');

        const testResult = testFn(testObj);
        expect(testResult).toBe('stringValue');

    });

    test(`searches ${JSON.stringify(testPaths.case4.array)}`, () => {
        let testArray = testPaths.case4.array;
        let testFn = getByArray(testArray);
        expect(typeof testFn).toBe('function');

        const testResult = testFn(testObj);
        expect(testResult).toBeNull();
        expect(testResult).not.toBeUndefined();
    });
});

describe('Executes getByString', () => {

    it(`is defined and function`, () => {
        expect(getByString).toBeDefined();
        expect(typeof getByString).toBe('function');
    });

    it(`searches without path defined`, () => {
        let testFn = getByString(null);
        expect(() => testFn(testObj) ).toThrow();
        expect(() => testFn(null) ).toThrow();
    });

    it(`searches ${testPaths.case1.string}`, () => {
        let testPath = testPaths.case1.string;
        const level2Result = {
            level3: {
                level4: 'stringValue',
            },
            level2number: 54,
        };
        let testFn = getByString(testPath);
        expect(typeof testFn).toBe('function');

        const testResult = testFn(testObj);
        expect(testResult).toEqual(level2Result);

    });

    it(`searches ${testPaths.case2.string}`, () => {
        let testPath = testPaths.case2.string;
        let testFn = getByString(testPath);
        expect(typeof testFn).toBe('function');

        const testResult = testFn(testObj);
        expect(testResult).toBe(54);
    });

    it(`searches ${testPaths.case3.string}`, () => {
        let testPath = testPaths.case3.string;
        let testFn = getByString(testPath);
        expect(typeof testFn).toBe('function');

        const testResult = testFn(testObj);
        expect(testResult).toBe('stringValue');

    });

    it(`searches ${testPaths.case4.string}`, () => {
        let testPath = testPaths.case4.string;
        let testFn = getByString(testPath);
        expect(typeof testFn).toBe('function');

        const testResult = testFn(testObj);
        expect(testResult).toBeNull();
        expect(testResult).not.toBeUndefined();
    });
});

describe('Executes hasValueInObjectArray', () => {

    it(`is defined and function`, () => {
        expect(hasValueInObjectArray).toBeDefined();
        expect(typeof hasValueInObjectArray).toBe('function');
    });

    it(`searches with missing object`, () => {
        expect(() => hasValueInObjectArray('attribute1', 'value1-1', undefined) ).toThrow();
    });

    it(`searches in not Array`, () => {
        expect(() => hasValueInObjectArray('attribute1', 'value1-1', 95) ).toThrow();
    });

    test(`searches undefined:undefined`, () => {
        const testResult = hasValueInObjectArray(undefined, undefined, testObjectArray);
        expect(testResult).toBeTruthy();
    });

    test(`searches undefined:'value1-1'`, () => {
        const testResult = hasValueInObjectArray(undefined, 'value1-1', testObjectArray);
        expect(testResult).toBeFalsy();
    });

    test(`searches attribute1:undefined`, () => {
        const testResult = hasValueInObjectArray('attribute1', undefined, testObjectArray);
        expect(testResult).toBeFalsy();
    });

    test(`searches attribute1:'value1-1'`, () => {
        const testResult = hasValueInObjectArray('attribute1', 'value1-1', testObjectArray);
        expect(testResult).toBeTruthy();
    });

    test(`searches attribute3:2`, () => {
        const testResult = hasValueInObjectArray('attribute3', 2, testObjectArray);
        expect(testResult).toBeTruthy();

    });

    test(`searches attribute3:5`, () => {
        const testResult = hasValueInObjectArray('attribute3', 5, testObjectArray);
        expect(testResult).toBeFalsy();

    });
});
