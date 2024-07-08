->You can create custom type guard functions using the is keyword. A type guard function returns a type predicate in the form of parameterName is Type.


interface Dog {
  bark: () => void;
}

interface Cat {
  meow: () => void;
}

function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}

function getPetSound(pet: Dog | Cat) {
  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}

const dog: Dog = { bark: () => console.log("Woof") };
const cat: Cat = { meow: () => console.log("Meow") };

getPetSound(dog); // Output: "Woof"
getPetSound(cat); // Output: "Meow"

