let myArr = [1, 2, 34]

// console.log(myArr.prototype);

function mulBy5(num) {
     return num*5
}

// console.log(mulBy5(5));//25
// console.log(mulBy5.prototype);//{}

function dupFun(product,price) {
     this.product = product;
     this.price = price
}

let coffee = new dupFun('Coffee', 10)
console.log(coffee);

let tea = new dupFun('Tea', 150)
console.log(tea);
// console.log(tea.prototype); // Undefined

dupFun.prototype.gstIncrement = function () {
     return this.price++
}

dupFun.prototype.PrintScore = function () {
     console.log(`Price is ${this.price}`);
}


let cappachino = new dupFun('Cappachino',250)

console.log(cappachino);
cappachino.gstIncrement()
cappachino.PrintScore()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property 
of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified
arguments and this is bound to the newly created object. If no explicit return value
is specified from the constructor, JavaScript assumes this, the newly created object
, to be the intended return value.

The new object is returned: After the constructor function has been called, if it
 doesn't return a non-primitive value (object, array, function, etc.), the newly 
 created object is returned.

*/