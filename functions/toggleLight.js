const toggleLight = (event, callMeBack) => {
    switch (event){
        case "walkedIn":
            callMeBack("Switch On")
            break;
        case "walkedOut":
            callMeBack("Switch Off")
            break;
        default:
            console.log("Light Off")
            break;
    }
}
toggleLight("walkedIn",(data) => console.log(`lights are ${data}`))
toggleLight("walkedOut",(data) => console.log(`lights are ${data}`))
toggleLight("walkedOnWater",(data) => console.log(`light are ${data}`))
