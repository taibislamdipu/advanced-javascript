// Falsy:
// false
// 0
// ""
// undefined
// null

//Truthy:
// '0'
// ' '
// []

let name = 12;

if (name || name == 0) {
    console.log("condition is True");
} else {
    console.log("condition is false");
}