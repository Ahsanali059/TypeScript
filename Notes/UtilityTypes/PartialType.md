`Partial Type`:Makes all properties in T optional.

Example:

interface Person 
{
    name:string,
    id:number,
    age:number 

}


type PartialPerson = Partial<Person>;

`this thing is also valid we provide only name`
const person:PartialPerson = {name:"ahsan"}