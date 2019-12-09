/**
 * Javascript Factory design pattern.
 * Solving a develop company employee problem.
 * @param name string name of the employee.
 * @param type number code that represent the position of the current employee  .
 */

function developer(name){
  this.name = name;
  this.type = 'developer';
}

function tester(name){
  this.name = name;
  this.type = 'tester';
}

function say() {
   console.log(`Hi i am ${this.name} and i´m a employee type ${this.type}`);
}

function EmployeeFactory(name){
  this.create = (name, type) => {
    switch(type)
    { 
      case 1: 
        return new developer(name);
      case 2:
        return new tester(name);
    }
  };
}

const employeeFactory = new EmployeeFactory();
const employees = [];


employees.push(employeeFactory.create('Camilo', 1));
employees.push(employeeFactory.create('Cristina', 2));
employees.push(employeeFactory.create('juan', 1));

employees.forEach(emp => {
  say.call(emp)
})



