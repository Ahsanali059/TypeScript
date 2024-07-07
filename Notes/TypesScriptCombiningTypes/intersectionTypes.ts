interface Person {
    name: string;
  }
  
  interface Employee {
    employeeId: number;
  }
  
  type EmployeePersonData = Person & Employee;
  
  let employeeDetails: EmployeePersonData = {
    name: "ahsan",
    employeeId: 59
  };
  
  console.log(employeeDetails);
  