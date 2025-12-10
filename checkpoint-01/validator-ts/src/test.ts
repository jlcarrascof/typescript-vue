import { validator } from './validator';


console.log(validator.validateString("Hello")); // true
console.log(validator.validateString(123)); // false

try {
    const resultado = validator.processError("vue");
    console.log(resultado);
} catch (error) {
    console.error('Error captured:', (error as Error).message);
}

console.log(validator.detectType("test")); // "string"
console.log(validator.detectType(42)); // "number"
console.log(validator.detectType(true)); // "another"
