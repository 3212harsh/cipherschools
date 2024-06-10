// let person = {
//     firstname:"Harsh",
//     lastname:"choudhary",
//     getfullname:function(){
//         return (`full name is ${this.firstname} ${this.lastname}`);
//     },
//     phonenumber:{
//         mobile:"99999",
//         landline:"88888"
//     }
// }

// console.log(person.getfullname());
// console.log(person.phonenumber.landline);

// function person(fname,lname){
//     this.firstname = fname;
//     this.lastname = lname;
// }

// let p1 = new person("Harsh","Choudhary");
// let p2 = new person("Aryan","Choudhary");

// console.log(p2.firstname);
// console.log(`Full name of p1 = ${p1.firstname} ${p1.lastname}`);

// const coder = {
//     isstudying:false,
//     printintro:function(){
//         console.log(`My name is ${this.name}, Am I studying? ${this.isstudying}`);
//     }
// }

// let me = Object.create(coder);
// me.name = "Harsh Choudhary";
// me.isstudying = true;

// me.printintro();

// class Vehicle{
//     constructor (name,maker,engine){
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }

//     getDetails(){
//         return `The name of Vehicle is ${this.name}`;
//     }
// }

// let v1 = new Vehicle("Creta","Hyundai","2500cc");
// let v2 = new Vehicle("Q5","Audi","3000cc");

// console.log(v1.engine);
// console.log(v2.getDetails());

// class Person{
//     constructor(name,id){
//         this.name = name;
//         this.id = id;
//     }

//     addAddress(newaddr){
//         this.address = newaddr;
//     }

//     getDetails() { 
//         console.log(`Name is : ${this.name} and Address is : ${this.address}`);
//     }
// }

// let p1 = new Person("Harsh Choudhary",19);
// p1.addAddress("Kangra");
// p1.getDetails();

class Person {
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }

    getDetails(){
        return `Firstname is : ${this.firstname} , lastname is :${this.lastname}`;
    }
}

class Student extends Person{
    constructor(firstname,lastname,rollno){
        super(firstname,lastname);
        this.rollno=rollno;
    }

    getDetails(){
        return `Firstname is : ${this.firstname} , lastname is :${this.lastname} and Rollno is : ${this.rollno}`;
    }
}

let p1 = new Student("Harsh","Choudhary",19);
console.log(p1.getDetails());