/* 
Dealing with two types of prototypes : constructor realted and object realted 
Since prototype is the fallback source of the properties for both
with the new keyword when a function is called with new keyword it is called as
constructor so it automatically gets prototype property that is shared with Function.prototype
Object can be created by two approaches : 
    1) with Object.create method in this cases it shared prototype with the specified object in the
        constructor 
    2) var declaring varible like var v = {} in this case it shared prototype with Object.prototype
*/

var employee = {

}
employee.name = "abhishek";
employee.details = function(){
    console.log(this.name);
}

console.log(Object.getPrototypeOf(employee) == Object.prototype);
employee.details();

var employee1 = Object.create(employee);
employee1.name = "amit";
employee1.details();
console.log(Object.getPrototypeOf(employee1));
console.log(Object.getPrototypeOf(employee1) == employee);


function Employee(){

}

console.log(Object.getPrototypeOf(Employee) == Function.prototype)

var emp = Object.create(Employee);

console.log(Object.getPrototypeOf(emp) == Employee);



