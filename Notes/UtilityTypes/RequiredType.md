`Required Type`:Makes all properties in T required.

Example:

interface Person{
    name?:string,
    id?:number,
    age?:number
}

type PersonDetial = Required<Person>;

const person:PersonDetails={name:"ahsan",id=034,age=24};


