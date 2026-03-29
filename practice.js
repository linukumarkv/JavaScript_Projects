
//Data structures, Arrays , ojcets and common build in methods/functions.
//=====================================================================
let fruits= ['Apple', 'Mango', 'Banana', 'Cherry']
console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

fruits[1] = 'Grapes'
console.log(fruits)

//To append an element into an array we use the push methods
//appneds to the end of the array as last element.
fruits.push('Green Apple')
console.log(fruits)

//removing the last element or deleting end element
fruits.pop()
console.log(fruits)

//Adding an element at the beginning
fruits.unshift('pineapple')
console.log(fruits)

//removing an element  at the beginning
fruits.shift()
console.log(fruits)

//slice - extracts a section ; start limit -  end limit..

//Eg : here start is 0, and end is 2, where element at 2 is excluded.
//existing array wont be replaced, it gives an extracted new array
let silcedfruits = fruits.slice(0,2)
console.log(silcedfruits)

//splice - to remove or replace or add an element in an array.
// eg here start is 1, how manay element is to be deleted. 
//here the second 1 is replacing one element with kiwi.

fruits.splice(1, 1, "Peach")
console.log(fruits)

///if splice(1,0,"kiwi)" then it shifts
 fruits.splice(1, 0, "kiwi")
 console.log(fruits)

 for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
 }

 //FOR EACH and arrow function
 //=>: This tells JavaScript: "Take the item a and pass it into the following block of code."
//{ console.log(a) }: This is the instruction to run for every single item.
 fruits.forEach(a=>{
    console.log(a)

 })


 //Nested objects and Arrays
//create an object

let person = {
    name:'Linu', age: 40, isStudent :true
}
console.log(person)
console.log(person.name)
console.log(person["name"])

person.age = 30
console.log(person.age)
fruits = ["Apple", "Orange", "Grapes", "Cherry"]

for (let i=0; i<fruits.length; i++ ){
    console.log(fruits[i])

}

//FOR EACH and arrow function
 //=>: This tells JavaScript: "Take the item a and pass it into the following block of code."
//{ console.log(a) }: This is the instruction to run for every single item.

fruits.forEach(a=>{
    console.log(a)
})

//creating an object - its like a dictionary, object store data as akey-value pairs.

let person = {
    name: "linu", age:25, isStudent :true
}

console.log(person)

//access values uisng keys.
console.log(person.name)
console.log(person.age)

console.log(person["name"])
console.log(person["age"])

person.age = 30
console.log(person.age)

//Nested objects and arrays.

let employee = {
    name:"Linu",
    address :{
        city:"Seattle",
        zip: 98029
    }

}

console.log(employee)
console.log(employee.name)
console.log(employee.address.zip)

 //how to write objects as array elements.

 let employees = [
    {name:"linu", age:40},
    {name:"Mini", age:43},
    {name:"riju", age:50}, 
 ]

 console.log(employees[0].name)
 console.log(employees[2].name)

 //Common array and methods 
 //MAP - method - Thi always returns an array.

 // To work on each array element we use loops to traverse through them.
 //  MAP method we can avoid looping and still perform functions on each array element.

 let numbers = [1,2,3,4]

 //Find the squares of each array element and store it ina separate array.
//=>: This tells JavaScript: "Take the item a and pass it into the following block of code."
 //Here the 'num' indicates the individual array element.
 // Tells the js that for every num value , follow num*num . 
 // Run itf for every single item.
 //
 let squared = numbers.map(num=>num*num)
 console.log(squared)

 //FILTER Method - Here we can acheck the condition as well.  Only true conditions will be
 // added to the array. 

 let evennumbers = numbers.filter(num=>num%2===0)
 console.log(evennumbers)

 //REDUCE - reducingthe result to a single value.

 //total initialioze to 0, then store total + num in total.
 let sum = numbers.reduce((total , num)=> total+num, 0)
 console.log(sum)

 //how to extract keys from the object. also values extraction can be done using methods
 //Object.keys,  object.values

 console.log(person)
 console.log(Object.keys(person))
 console.log(Object.values(person))

 //Get  full data  -- Inside th person object each key value pair is returned as an element in an array using object.entries method.
console.log(Object.entries(person))


