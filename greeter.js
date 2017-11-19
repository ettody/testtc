"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modulsuper = require("./mysuper");
var mypuint = new modulsuper.Point3D(10, 100, 10);
var Student = /** @class */ (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.middleinitial + " " + person.lastname;
}
var user = new Student("Jane", "K.", "Riatry");
console.log(mypuint.hitungvolume());
