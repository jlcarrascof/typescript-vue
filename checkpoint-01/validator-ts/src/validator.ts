function validateString(value: unknown): boolean {
    return typeof value === 'string';
}

function processError(value: unknown): string {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else {
        throw new Error('Value is not a string');
    }
}

function detectType(value: any): 'string' | 'number' | 'another' { 
    if (typeof value === 'string') {
        return 'string';
    } else if (typeof value === 'number') {
        return 'number';
    } else {
        return 'another';
    }
}

export const validator = {
    validateString,
    processError,
    detectType
};
