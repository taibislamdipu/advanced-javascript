

const student = [
    { id: 21, name: "Omor sany" },
    { id: 31, name: "Mannaa" },
    { id: 41, name: "Moyuri" },
    { id: 71, name: "DeepJol" }
];

const names = student.map(x => x.name);
const ids = student.map(s => s.id > 40);
const bigger = student.filter(s => s.id > 40);
const biggerOne = student.find(s => s.id > 40);

const bigger2 = student.filter(s => ({ 'id': s.id > 40 })); // same jinis ektu diffrent vabe kora
const idOver40 = student.filter(s => s.id > 40).map(s => s.id) // find the specific value from array

console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);
console.log(bigger2);
console.log(idOver40);
