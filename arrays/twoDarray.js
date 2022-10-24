const twoDarrays = [["cloths", "shoes"], ["bags", "makeUpKit"], ["rings", "bands"], ["nails", "lashes"]];
for (let items in twoDarrays){
    console.log(items);
    for (let item in twoDarrays[items]){
        console.log(" " + twoDarrays[items][item]);
    }
}