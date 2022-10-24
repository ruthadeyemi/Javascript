//If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
//However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
//Syntax:
const array_name = ["item1, item2, ..."]; //or
const cars = [
    "Saab",
    "Volvo",
    "BMW"
];
//You can also create an array, and then provide the elements:
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
//Using the Javascript- Keyword new
// The following example also creates an Array, and assigns values to it:
const cars = new Array("Saab", "Volvo", "BMW");
// The two examples above do exactly the same.
// There is no need to use new Array().
// For simplicity, readability and execution speed, use the array literal method.

// Accessing Array Elements
// You access an array element by referring to the index number:

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];

// Changing an Array Element
// This statement changes the value of the first element in cars:
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";

// Access the Full Array
// With Javascript-, the full array can be accessed by referring to the array name:
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

//Arrays are Objects
// Arrays are a special type of objects. The typeof operator in Javascript- returns "object" for arrays.
// But, Javascript- arrays are best described as arrays.  Arrays use numbers to access its "elements". In this example, person[0] returns John:
const person = ["John", "Doe", 46];
//Objects use names to access its "members". In this example, person.firstName returns John:
const person = {firstName:"John", lastName:"Doe", age:46};


//Array Elements Can Be Objects
// Javascript- variables can be objects. Arrays are special kinds of objects.
// Because of this, you can have variables of different types in the same Array.
// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

// Array Properties and Methods
// The real strength of Javascript- arrays are the built-in array properties and methods:
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

// The length Property. The length property of an array returns the length of an array (the number of array elements).
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
//The length property is always one more than the highest array index.
//Accessing the Last Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
//Accessing the Last Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];

//Looping Array Elements
// One way to loop through an array, is using a for loop:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>"
//You can also use the Array.forEach() function:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
function myFunction(value) {
    text += "<li>" + value + "</li>";
}

//Adding Array Elements
// The easiest way to add a new element to an array is using the push() method
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
//New element can also be added to an array using the length property:
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";

//WARNING !
// Adding elements with high indexes can create undefined "holes" in an array
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";

// Associative Arrays
// Many programming languages support arrays with named indexes.
// Arrays with named indexes are called associative arrays (or hashes).
// Javascript- does not support arrays with named indexes.
// In Javascript-, arrays always use numbered indexes.
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"
//WARNING !!
// If you use named indexes, Javascript- will redefine the array to an object.
// After that, some array methods and properties will produce incorrect results.
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined

//The Difference Between Arrays and Objects
// In Javascript-, arrays use numbered indexes
// In Javascript-, objects use named indexes.
// Arrays are a special kind of objects, with numbered indexes.

// When to Use Arrays. When to use Objects.
// Javascript- does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.
// Javascript- new Array()
// Javascript- has a built in array constructor new Array().
// But you can safely use [] instead.
// These two different statements both create a new empty array named points:
const points = new Array();
const points = [];
//These two different statements both create a new array containing 6 numbers:
const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];

//The new keyword can produce some unexpected results
const points = [40];// Create an array with one element:
//is not the same as:
const points = new Array(40);// Create an array with 40 undefined elements

// How to Recognize an Array
// A common question is: How do I know if a variable is an array?
// The problem is that the Javascript- operator typeof returns "object":
const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
//The typeof operator returns object because a Javascript- array is an object.
// Solution 1:
// To solve this problem ECMAScript 5 (Javascript- 2009) defined a new method Array.isArray():
Array.isArray(fruits);
// Solution 2:
// The instanceof operator returns true if an object is created by a given constructor:
const fruits = ["Banana", "Orange", "Apple"];
fruits instanceof Array;
//Complete Array Reference
// For a complete Array reference, go to our:
// Complete Javascript- Array Reference.
// The reference contains descriptions and examples of all Array properties and methods.