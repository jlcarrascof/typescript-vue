"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
function validateString(value) {
    if (typeof value === 'string')
        return true;
    return false;
}
function processError(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        throw new Error('Value is not a string');
    }
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
