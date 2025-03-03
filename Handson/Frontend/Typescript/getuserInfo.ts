// Define variables of different types in TypeScript
let num: number = 42;
let str: string = "Hello, TypeScript!";
let isTrue: boolean = true;
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let anyValue: any = "Can be anything";

// Define variables
let age: number = 25;
let isActive: boolean = true;

// Function to get user info
function getUserInfo(age: number, isActive: boolean): string {
    return `User is ${age} years old and is ${isActive ? "active" : "inactive"}.`;
}

// Print values to the console
console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", isTrue);
console.log("Null:", nullValue);
console.log("Undefined:", undefinedValue);
console.log("Any:", anyValue);

// Print user info
console.log(getUserInfo(age, isActive));
