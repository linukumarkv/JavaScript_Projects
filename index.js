console.log("Hello , I am from External scripting living ouside as an extenal javascript file.")
console.error('This is an error printed using console.error')
console.warn('This is a warning')

//We can declare variables inside javascript using Var, let and const keywords -->
//Var can be re declare..so not recommended..let is th erecommeneded modern way-->
var name = "linu"
var name = "kumar"

let age = 10
age = 30

const place = "kochi"
let score = 100

let sum = 6+3
console.log(sum)

let sub = 7-4
console.log(sub)

let prod = 5*4
console.log(prod)

let quotient = 77/3
console.log(quotient)

let rem = 45%4
console.log(rem)

let a = 10
a+=5
console.log(a)

let num1 =3
let num2 = 5
console.log(num1==num2)

console.log(5>4)

//logical operators
let dt=5>4 && 5>6
console.log(dt)

let ab =6>8 || 6>5
console.log(ab)

//string operators using + operator

let fname = "linu"
let lname = "kumar"

let fullname = fname + " " + lname
console.log(fullname)

let newname = ` hi i am  ${fname} ${lname}`
console.log(newname)