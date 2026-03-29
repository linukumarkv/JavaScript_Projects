// Write a program to print only fruits with more than 5 letters using a loop.

let fruits = ["Apple", "Banana", "Orange", "Grapes", "Kiwi"];

for (let i =0; i < fruits.length; i++){

    if (fruits[i].length> 5){
        console.log(fruits[i])

    }
}

//Using forEach
fruits.forEach(a=>{
    if (a.length> 5){
        console.log(a)
    }
})