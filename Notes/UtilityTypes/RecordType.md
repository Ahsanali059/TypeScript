`Record Type<K,T>`:

Creates an object type with keys of type K and values of type T.

Example:

type Roles = "admin" | "user" | "guest";

type UserRoles = Record<Roles, string>;

const roles: UserRoles = {
  admin: "Admin Role",
  user: "User Role",
  guest: "Guest Role",
};