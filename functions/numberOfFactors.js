const num = 12;
const countFactors = num => {
    let count = 0;
    let flag = 2;
    while(flag <= num / 2){
        if(num % flag++ !== 0){
            continue;
        };
        count++;
    };
    return count + 2;
};
console.log(countFactors(num));
console.log(countFactors(2));
console.log(countFactors(454));
console.log(countFactors(99));