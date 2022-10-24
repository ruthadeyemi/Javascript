function checkHeight(name, height){
 return    height <= "4ft" ? name + " is close to the ground" : "plenty"
}
console.log(checkHeight("lazarus", "4ft"))
//output lazarus is close to the ground.


function checkHeight(name, height){
    return height <= "4ft" && name + " is close to the ground"
}
console.log(checkHeight("lazarus", "5ft"))
//output is false because return function height is less than or equals to 4ft.

function  checkHeight(name, height){
    return height <= "4ft" || name+ height >= "4ft" + "is close to the ground"
}
console.log(checkHeight("lazarus", "6ft"))
//output is true because of the return function and the logical operator.

let height = "2ft"
height <= "4ft" && height >= "4ft"

function checkHeight(){
    return true
}
console.log(checkHeight())
//output true because the return function return true
