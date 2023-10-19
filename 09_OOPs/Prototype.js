let heros = ["IronMan", 'Spiderman']

let powers = {
     ironMan: 'Knowledge & Wisdom',
     spiderMan: 'strength',
     getSpidyPower: function () {
          console.log(`You Spidy Power that is ${this.spiderMan}`);
     }
}


Object.prototype.prathyushPower = function () {
     console.log(`Prathyush has JavaScript`);
}

let str  = " "
// powers.prathyushPower()
// heros.prathyushPower()
/* here Since Object is Global it is applicable for every child of a object
 so Function Array String can Have a access of   prathyushPower */
// str.prathyushPower()
let user = {
     name: 'ADS',
     email : 'ADS@amazon.com'
}

let teacher = {
     makesVideo : true
}

let supportTeacher = {
     isAvailable : false
}

let TA = {
     makesAssignment: 'JS Assignment',
     fullTime: true,
     __proto__ : supportTeacher
}

teacher.__proto__ = supportTeacher
teacher.__proto__ = user
teacher.__proto__ = TA
// console.log(teacher);

// adding a method to a String
let userName = "  Ram   "
console.log(userName.length);
String.prototype.trueLength = function () {
     console.log(this);
     console.log(`True Length is : ${this.trim().length}`);
}

userName.trueLength()