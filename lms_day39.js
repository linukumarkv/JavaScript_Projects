// Write a program to print only fruits with more than 5 letters using a loop.

let fruits = ["Apple", "Banana", "Orange", "Grapes", "Kiwi"];

for (let i =0; i < fruits.length; i++){

    if (fruits[i].length> 5){
        console.log(fruits[i])

    }
}

//Write a program to print only fruits with more than 5 letters using Using forEach
fruits.forEach(a=>{
    if (a.length> 5){
        console.log(a)
    }
})

//2. Write a program to find the name of the youngest employee in an array of objects.

let employee = [{'name': 'Linu', age: 40},{'name': 'Kumar', age: 39},{'name': 'Paru', age: 10} ];
let youngest = employee[0];

employee.forEach(b=>{
    if (b.age < youngest.age){
        youngest= b;
    }

})

console.log(`The Youngest employee is ${youngest.name} at ${youngest.age} years of age`);
