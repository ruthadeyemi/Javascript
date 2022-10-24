const cookFood = function () {
    return function (food){
        return food
    }
}

const testBeans = cookFood()
console.log(testBeans("beans"))

const food = cookFood()("beans")
console.log(food)

const returnFunction = (aFunction) =>{
    returnFunction   // a function that takes a function return a function
}

const yetAnotherFunction = returnFunction(() => console.log("Ekaabo"))
yetAnotherFunction()