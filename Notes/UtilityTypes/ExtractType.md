Extracts from T those types that are assignable to U.

type T = "a" | "b" | "c";
type U = "a" | "f";

type Extracted = Extract<T, U>; // "a"
