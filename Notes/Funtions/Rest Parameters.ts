function greet(name:string,...otherParams:string[]):string{
    return `${name} ${otherParams.join(", ")}`
}

console.log(greet("Ahsan","Usama","Hanzala"))