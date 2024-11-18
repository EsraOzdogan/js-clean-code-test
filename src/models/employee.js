export default class Employee extends User{
    constructor(id, firstName, lastName, city,age, employeeSalary) {
        super(id, firstName, lastName, city,age)
        this._employeeSalary = employeeSalary
    }
}