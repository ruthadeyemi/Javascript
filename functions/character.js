function createCharacter(){
    let character = {
        name: "adeola",
        isWig: true,
        gender: "female",
        getName: function () {
            return this.name
        }
    }
    return character
}
let person = createCharacter()
let personName = person.getName()
console.log(personName)

// let person = createCharacter()
// let getPersonName = person.getName()   //let getPersonName = person.getName.bind(person)
// let humanName = getPersonName()
// console.log(humanName)  //it won't print bcos the person.getName is undefined,bcos person does not know what 'this is.'