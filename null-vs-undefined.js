
// undefined scenario example 1
let pakhi;
console.log(pakhi);

// undefined scenario example 2
function add(num1, num2) {

    const result = num1 + num2;
    console.log(num1 + num2);

}
const result = add(4, 6);
console.log(result); // avabe kaj korbe but function er moddhe return na korar jonno undefined dekhabe.

// undefined scenario example 2 solution
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}
const result = add(4, 6);
console.log(result);


// undefined scenario example 3
function add(num1, num2 = 0) {
    console.log(num1, num2);
}
const result = add(7); // 2 ta input debar kotha but disi 1 ta, akhane 1 ta input er valu show korbe, onnota undefined dekhabe.
console.log(result);


// undefined scenario example 4
let premik = { name: 'Dipu', phone: 0171112211 };
console.log(premik.gf); // age namer kono kisui premik ar object {} er moddhe nai, tai undefined show korbe.


// undefined scenario example 5
let fun = undefined;
console.log(fun);

// undefined scenario example 6
let age = [20, 15, 27];
console.log(age[5]); // array er 5 number position a kono value e nai, tai undefined show korbe. 


