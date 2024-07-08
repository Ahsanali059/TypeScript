`Omit Type`
Creates a type by omitting a set of properties K from T.

interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonWithoutEmail = Omit<Person, "email">;

const person: PersonWithoutEmail = { name: "Alice", age: 25 }; // Email is omitted

