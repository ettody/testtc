import modulsuper = require("./mysuper");
var mypuint = new modulsuper.Point(10,100);
class Student{
    fullname : string;
    constructor(public firstname: string, public middleinitial: string, public lastname: string){
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person {
    firstname : string;
    middleinitial : string;
    lastname : string;
}

function greeter(person : Person){
    return "Hello, " + person.firstname + " " + person.middleinitial + " " + person.lastname;
}

var user = new Student("Jane", "K.","Riatry");
console.log(mypuint.y);