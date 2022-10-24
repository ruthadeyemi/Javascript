const drinkWater = function(){
    console.log("drink water")
}
const drinkWaterTwo = () => {
    console.log("drink water two")
}
doArithmetic ((element) =>{
    for (let count = 0; count < 12; count++){
        count >= element ? console.log(`${element} / ${count} = ${count / element}`): console.log(count)
    }
})
doArithmetic(drinkWater)
console.log()
doArithmetic(drinkWaterTwo)


