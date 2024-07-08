`Readonly<T>`:Makes all properties in T read-only.

Example:

interface Person 
{
    name:string,
    salary:string
}

type personDetails:Readonly<Person> = = { name: "Alice", age: 25 };

`we cannot change the age of person Because this is Readonly`
Person.age = 26