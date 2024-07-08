function greet(name) {
    var otherParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherParams[_i - 1] = arguments[_i];
    }
    return "".concat(name, " ").concat(otherParams.join(", "));
}
console.log(greet("Ahsan", "Usama", "Hanzala"));
