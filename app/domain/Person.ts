export class Person {
    id: number;
    firstName:string;
    lastName:string;
    age:number;
    dob:string;
    salary:number;
    status:string;

    constructor(firstName:string,lastName:string,age:number,salary:number,dob:string,status:string) {
        this.firstName = firstName;
        this.age = age;
        this.salary = salary;
        this.lastName = lastName;
        this.dob = dob;
        this.status = status;
    }
}