let person = {
    userName: "jerry",
    gender: "male",
    age: "18",
    school: "unilag"
}
for (key in person){
    console.log(person[key])
}
let object;
console.log(object.keys(person))