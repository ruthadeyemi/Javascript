function callMe(phoneNumber, countryDial){ //parameter and place holder
    if (phoneNumber !== " "){ // the statement is to make sure that the user does not pass an empty string.
        countryDial(phoneNumber) //syntax for calling a function, the countryDail function come from the callMe parameter while, the phoneNumber
    }
    else {
        console.log("Enter a valid number")
    }
}
const  dail = (phoneNumber) => console.log(`calling.${phoneNumber}`)
callMe("08022247865",dail)