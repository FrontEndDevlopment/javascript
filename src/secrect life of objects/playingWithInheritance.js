function Employee(text){
    this.employeeType = text;
}

Employee.prototype.getDetails = function(){
    console.log(this.employeeType);
}

var emp = new Employee("text1");
emp.getDetails();


function RegularEmployee(text){
    Employee.call(this,text);
}

RegularEmployee.prototype = Object.create(Employee.prototype);

var reg = new RegularEmployee("text2");
reg.getDetails();