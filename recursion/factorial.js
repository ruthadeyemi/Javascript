function factorial(x){
    if (x === 0){
        return 1;
    }
    else{
        return x * factorial(x - 1);
        //3 * factorial(3 -1);
        //3 * 2 * factorial(2 -1);
        //3 * 2 * 1 * factorial(1 - 1);
    }
}
const number = 3;
if (number > 0){
    let result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
}