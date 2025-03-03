// Define variables of different types in TypeScript
var num = 42;
var str = "Hello, TypeScript!";
var isTrue = true;
var nullValue = null;
var undefinedValue = undefined;
var anyValue = "Can be anything";
// Define variables
var age = 25;
var isActive = true;
// Function to get user info
function getUserInfo(age, isActive) {
    return "User is ".concat(age, " years old and is ").concat(isActive ? "active" : "inactive", ".");
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
