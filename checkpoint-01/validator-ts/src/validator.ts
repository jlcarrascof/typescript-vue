function validateString(value: unknown): boolean {
    if (typeof value === 'string') 
        return true;
    return false;
}

function processError(value: unknown): string {

}

function detectType(value: any): string { 
}

export const validator = {
    validateString,
    processError,
    detectType
};
