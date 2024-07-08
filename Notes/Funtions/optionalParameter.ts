function greet(name:string,greeting?: string): string{

    return `${greeting || "Hello"}, ${name}!`;

}


console.log(greet("Ahsan")); // Output: Hello, Charlie!
console.log(greet("Ali", "Hi")); // Output: Hi, Dave!


