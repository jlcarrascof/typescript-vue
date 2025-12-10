import { validator } from './validator';


console.log(validator.validateString("Hello")); // true
console.log(validator.validateString(123)); // false

try {
    const resultado = validator.processError("vue");
    console.log(resultado);
} catch (error) {
    console.error('Error captured:', (error as Error).message);
}