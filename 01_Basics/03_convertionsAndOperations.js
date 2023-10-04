let number = '33'

console.log(typeof number);// (string)

let newNum = typeof (number)

console.log(newNum);// (string)

let strNumber = "03Abcd"
console.log(typeof strNumber) // (string)
let newStrNum = Number(strNumber)
console.log(typeof newStrNum);//(number)
console.log(newStrNum);// O/P => NaN "Not A Number"

let isTrue = true
console.log(typeof Number(isTrue));//=> O/P = 1 (true == 1) since we converted to Number type is(number)
console.log(typeof isTrue)// originally Type is (boolean)

let isLogedIn = 1
console.log(typeof isLogedIn);// O/p => 1 and type (number)
let boolIsLogedIn = Boolean(isLogedIn)
console.log(typeof boolIsLogedIn)// O/P => true & type (boolean) since converted to boolean

let str1 = ""
let str2 = "Ram"
let boolStr1 = Boolean(str1)
console.log(boolStr1)
let boolStr2 = Boolean(str2)
console.log(boolStr2)
/*
=> "33"(string) => Number("33") (number)
=> "03Abcd"(string) => Number("03Abcd") (NaN)"Not A Number"
=> true (boolean) (true == 1)
=> flase (boolean) (false == 0)
=> if we Convert empty string into Boolean than the O/P will be flase 
    since there is no value.(0 lenght)
=> if we convert the string which has Value in it to Boolean than the O/P will be true
    since there is value (1 value is there)
*/