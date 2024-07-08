function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, " ").concat(name);
}
console.log(greet("Ahsan"));
console.log(greet("Ali", "Hi"));
