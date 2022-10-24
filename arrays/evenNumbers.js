// function getEvenNumbers() {
// let anArray = [1,2,3,4,5,6,7,8];
//     let even = anArray.filter(number => number % 2 == 0);
//     console.log('Even numbers in the array are: ' + even)
//     }
//
// getEvenNumbers()

// let anArray = [1, 2, 3, 4, 5, 6, 7, 8]
// function  getEvenNumbers(){
//     for(let number = 0; number < anArray.length; number ++){
//         if (anArray[number] % 2 == 0){
//             process.stdout.write(anArray[number] + " ") // is to print it on one line.
//         }
//     }
// }
// getEvenNumbers(anArray)

(function oneLine(anArray){for (let number = 0; number < anArray.length; number++){anArray[number] % 2 ===0 && process.stdout.write(anArray[number] + " ")}})([1, 2, 3, 4, 5, 6, 7, 8, ])