// Array iteration using forEach
let array = [1, 2, 3, 4, 5];
array.forEach((element, index) => {
    console.log(`Element is ${element} and its index is ${index}`);
});

// Object iteration using for...in and proper key-value access
let objtype = {
    "fname": "vaisali",
    "lname": "Arjunan",
    "age": 19
};

/* Commented out incorrect examples
console.log(objtype.age);
objtype.forEach((key, value) => { // forEach doesn't work on objects
    console.log(value, key);
});
for (const {key, value} of objtype) { // Incorrect syntax for objects
    console.log(key, value);
}
*/

// Corrected object iteration using for...in
for (let key in objtype) {
    let value = objtype[key]; // Proper way to access object values
    console.log(`${key} : ${value}`);
}
