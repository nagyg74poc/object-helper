let map = require('../dist').map;
let mapTo = require('../dist').mapTo;
let merge = require('../dist').merge;
let mapArray = require('../dist').mapArray;

const originObject = {
    level1: {
        level2: 'stringValue',
    },
};


const originArray = [
    {
        level1: {
            level2: 'stringValue-1',
        },
    },
    {
        level1: {
            level2: 'stringValue-2',
        },
    }
];

describe('Executes map', () => {

    it(`is defined and function`, () => {
        expect(map).toBeDefined();
        expect(typeof map).toBe('function');
    });

    it(`changes level1 to changedAttribute`, () => {
        const mapper = {
            level1: 'changedAttribute'
        };
        const expectedObj = {
            changedAttribute: {
                level2: 'stringValue',
            },
        };
        const receivedObj = map(originObject, mapper);
        expect(receivedObj).toEqual(expectedObj);
    });

    it(`changes level1.level2 to level1.changedAttribute`, () => {
        const mapper = {
            'level1.level2': 'level1.changedAttribute'
        };
        const expectedObj = {
            level1: {
                changedAttribute: 'stringValue',
            },
        };
        const receivedObj = map(originObject, mapper);
        expect(receivedObj).toEqual(expectedObj);
    });

    it(`changes level1.level2 to changedAttribute`, () => {
        const mapper = {
            'level1.level2': 'changedAttribute'
        };
        const expectedObj = {
            changedAttribute: 'stringValue',
        };
        const receivedObj = map(originObject, mapper);
        expect(receivedObj).toEqual(expectedObj);
    });

});

describe('Executes mapTo', () => {

    it(`is defined and function`, () => {
        expect(mapTo).toBeDefined();
        expect(typeof mapTo).toBe('function');
    });

    it(`changes level1 to changedAttribute`, () => {
        const mapper = {
            level1: 'changedAttribute'
        };
        const expectedObj = {
            changedAttribute: {
                level2: 'stringValue',
            },
        };
        let receivedObj = {};
        receivedObj = mapTo(originObject, receivedObj, mapper);
        expect(receivedObj).toEqual(expectedObj);
    });

    it(`changes level1.level2 to level1.changedAttribute`, () => {
        const mapper = {
            'level1.level2': 'level1.changedAttribute'
        };
        const expectedObj = {
            level1: {
                changedAttribute: 'stringValue',
            },
        };
        let receivedObj = {};
        receivedObj = mapTo(originObject, receivedObj, mapper);
        expect(receivedObj).toEqual(expectedObj);
    });

    it(`changes level1.level2 to changedAttribute`, () => {
        const mapper = {
            'level1.level2': 'changedAttribute'
        };
        const expectedObj = {
            changedAttribute: 'stringValue',
        };
        let receivedObj = {};
        receivedObj = mapTo(originObject, receivedObj, mapper);
        expect(receivedObj).toEqual(expectedObj);
    });

});

describe('Executes merge', () => {

    it(`is defined and function`, () => {
        expect(merge).toBeDefined();
        expect(typeof merge).toBe('function');
    });

    it(`merges after change level1 to changedAttribute`, () => {
        const mapper = {
            level1: 'changedAttribute',
        };
        const expectedObj = {
            changedAttribute: {
                level2: 'stringValue',
            },
            level3: 'l3Value'
        };
        let receivedObj = {
            level3: 'l3Value'
        };
        receivedObj = merge(originObject, receivedObj, mapper);
        expect(receivedObj).toEqual(expectedObj);
    });

});

describe('Executes mapArray', () => {

    it(`is defined and function`, () => {
        expect(mapArray).toBeDefined();
        expect(typeof mapArray).toBe('function');
    });

    it(`changes level1 to changedAttribute`, () => {
        const mapper = {
            level1: 'changedAttribute'
        };
        const expectedObj = [
            {
                changedAttribute: {
                    level2: 'stringValue-1',
                },
            },
            {
                changedAttribute: {
                    level2: 'stringValue-2',
                },
            }
        ];
        const receivedObj = mapArray(originArray, mapper);
        expect(receivedObj).toEqual(expectedObj);
    });

    it(`changes level1.level2 to level1.changedAttribute`, () => {
        const mapper = {
            'level1.level2': 'level1.changedAttribute'
        };
        const expectedObj = [
            {
                level1: {
                    changedAttribute: 'stringValue-1',
                },
            },
            {
                level1: {
                    changedAttribute: 'stringValue-2',
                },
            }
        ];
        const receivedObj = mapArray(originArray, mapper);
        expect(receivedObj).toEqual(expectedObj);
    });

    it(`changes level1.level2 to changedAttribute`, () => {
        const mapper = {
            'level1.level2': 'changedAttribute'
        };
        const expectedObj = [
            {
                changedAttribute: 'stringValue-1',
            },
            {
                changedAttribute: 'stringValue-2',
            }
        ];
        const receivedObj = mapArray(originArray, mapper);
        expect(receivedObj).toEqual(expectedObj);
    });


    it(`changes level1.level2 to changedAttribute`, () => {
        const mapper = {
            '[].level1.level2': '[].changedAttribute'
        };
        const expectedObj = [
            {
                changedAttribute: 'stringValue-1',
            },
            {
                changedAttribute: 'stringValue-2',
            }
        ];
        const receivedObj = map(originArray, mapper);
        expect(receivedObj).toEqual(expectedObj);
    });

});