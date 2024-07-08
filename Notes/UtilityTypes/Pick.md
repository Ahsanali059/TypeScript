`Pick<T, K>`:

Creates a type by picking a set of properties K from T.

Is may kisi b 2 ya 2 say ziyada attribute ko optional bana dita ho 

interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonNameEmail = Pick<Person, "name" | "email">;

const person: PersonNameEmail = { name: "Alice", email: "alice@example.com" }; // Only name and email are included
