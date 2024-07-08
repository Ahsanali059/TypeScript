`ReturnType`:

Extracts the return type of a function type.

function getUser() {
  return { name: "Alice", age: 25 };
}

type User = ReturnType<typeof getUser>; // { name: string; age: number; }
