What is type `combining` ? 

=>`Type Combining` is the process where we combine the type of data using we can combine type 

->union
->intersection types
->Type aliases
->keyOfOperator

Union:

Union Type allow a value to be one of the several types 

Like:

type StringOrNumber = string | number;

let value: StringOrNumber;

`value = "Hello"`; // valid
`value = 42`; // valid
`value = true`; // invalid

2-`Intersection Types`:

->Intersection types combine multiple types into one,requiring the value to satisfy all the combined types.

Practical Example:

interface Person
{
    name:string
}

interface Employee{
    employeeId:number
}

type EmployeePerson:Person & Employee;

let employee:EmployeePerson{
    name:"ahsan",
    employeeId:059
}

3-`Type Aliases`
->Type aliases create a new name for a type, which can be used to simplify complex type definitions or combine existing types.

Practical Example:

type Address = {
    street: string;
    city: string;
};

type ContactInfo = {
  email: string;
  phone: string;
};

type PersonDetails = Address & ContactInfo & {
  name: string;
  age: number;
};

let person: PersonDetails = {
  name: "Bob",
  age: 30,
  street: "123 Main St",
  city: "Anytown",
  email: "bob@example.com",
  phone: "123-456-7890"
};
