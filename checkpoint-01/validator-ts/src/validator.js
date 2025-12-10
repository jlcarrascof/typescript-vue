"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
function validateString(value) {
    return typeof value === 'string';
}
function processError(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    throwError('Value is not a string'); //  Auxiliary function to throw an error with never return type
}
function throwError(message) {
    throw new Error(message);
}
function detectType(value) {
    if (typeof value === 'string') {
        return 'string';
    }
    else if (typeof value === 'number') {
        return 'number';
    }
    else {
        return 'another';
    }
}
exports.validator = {
    validateString: validateString,
    processError: processError,
    detectType: detectType
};
