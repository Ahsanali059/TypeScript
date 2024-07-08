function greet(name:string,greeting:string="Hello"):string{
    return `${greeting} ${name}`
}

console.log(greet("Ahsan")); 
console.log(greet("Ali", "Hi")); 