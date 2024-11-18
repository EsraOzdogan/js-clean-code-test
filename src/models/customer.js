import { User } from "./user";

export default class Customer extends User{
    constructor(id, firstName, lastName, city, age, customerCreditCardNumber) {
        super(id, firstName, lastName, city, age);
        this._customerCreditCardNumber = customerCreditCardNumber
    }
}