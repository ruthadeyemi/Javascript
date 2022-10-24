function ageQualification(age) {

    if (age < 18) {
        console.log("Sorry, you are too young for this role");
    } else if (age >= 18 && age <= 30) {
        console.log("Welcome, you are qualify for this role");
    } else {
        console.log("Sorry, you are old for this role.");
    }
}
console.log(ageQualification(25))
