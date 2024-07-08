->Type Guards in TypeScript are mechanisms that allow you to check the type of a variable or an expression at runtime, and thus provide more precise types for TypeScript's type checker. They help in ensuring type safety and avoiding runtime errors by narrowing down the types of variables in conditional blocks.

Built-in Type Guards

->typeof Operator
The typeof operator is used to determine the type of a variable. It can be used to check for types like string, number, boolean, symbol, undefined, object, and function.

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

console.log(padLeft("Hello", 4)); // Output: "    Hello"
console.log(padLeft("Hello", ">>")); // Output: ">>Hello"


(2)->instanceof Operator:The instanceof operator checks if an object is an instance of a specific class or constructor function.

class Bird {
  fly() {
    console.log("Flying");
  }
}

class Fish {
  swim() {
    console.log("Swimming");
  }
}

type Pet = Bird | Fish;

function getPetAction(pet: Pet) {
  if (pet instanceof Bird) {
    pet.fly();
  } else if (pet instanceof Fish) {
    pet.swim();
  }
}

const bird: Pet = new Bird();
const fish: Pet = new Fish();

getPetAction(bird); // Output: "Flying"
getPetAction(fish); // Output: "Swimming"

