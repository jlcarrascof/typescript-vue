"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("./validator");
console.log(validator_1.validator.validateString("Hello")); // true
console.log(validator_1.validator.validateString(123)); // false
try {
    var resultado = validator_1.validator.processError("vue");
    console.log(resultado);
    console.log(validator_1.validator.processError(true));
}
catch (error) {
    console.error('Error captured:', error.message);
}
console.log(validator_1.validator.detectType("test")); // "string"
console.log(validator_1.validator.detectType(42)); // "number"
console.log(validator_1.validator.detectType(true)); // "another"
