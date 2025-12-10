function validateString(value: unknown): boolean {
    return typeof value === 'string';
}

function processError(value: unknown): string {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    throwError('Value is not a string'); //  Auxiliary function to throw an error with never return type
}

function throwError(message: string): never {
    throw new Error(message);
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
