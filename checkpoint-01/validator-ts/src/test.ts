import { validator } from './validator';


console.log(validator.validateString("Hello")); // true
console.log(validator.validateString(123)); // false

