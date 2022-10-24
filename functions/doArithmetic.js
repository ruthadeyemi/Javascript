const multiplication = (number) => {
    for (let count = 0; count < 12; count++){
        console.log(number + " * " + count + " = " + (number * count))
    }
}
const addition = (number) => {
    for (let count = 0; count < 12; count++){
        console.log(number + " + " + count + " = " + (number + count))
    }
}

function doArithmetic(aFunction){
    let x = 2
    aFunction(x)  // note that x is the same as number
}
doArithmetic(multiplication)
console.log()
doArithmetic(addition)
