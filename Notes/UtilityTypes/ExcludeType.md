`Exclude<T, U>`

Excludes from T those types that are assignable to U.

type T = "a" | "b" | "c";
type U = "a";

type Excluded = Exclude<T, U>; // "b" | "c"
