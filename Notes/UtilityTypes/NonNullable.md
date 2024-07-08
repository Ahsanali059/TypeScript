`NonNullable<T>`

Excludes null and undefined from T.

type T = string | number | null | undefined;

type NonNullableType = NonNullable<T>; // string | number

