"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("./validator");
console.log(validator_1.validator.validateString("Hello")); // true
console.log(validator_1.validator.validateString(123)); // false
