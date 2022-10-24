function movement(person){
    console.log(`when ${person.name} runs ${person.isWig ? "her wig falls" : "breeze blows her hair"}`)
}
function  animation(defineCharacterMovement){
    let character = {
        name: "adeola",
        isWig: true,
        gender: "female"
    }
    defineCharacterMovement(character)
}
animation(movement)