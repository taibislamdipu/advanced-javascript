

const student = [
    { id: 21, name: "Omor sany" },
    { id: 31, name: "Mannaa" },
    { id: 41, name: "Moyuri" },
    { id: 71, name: "DeepJol" }
];

// const names = student.map(x => x.name);
// const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 40);
// const biggerOne = student.find(s => s.id > 40);

const idOver40 = student.map(s => s.id > 40);

// console.log(names);
// console.log(ids);
// console.log(bigger);
// console.log(biggerOne);
console.log(idOver40);
console.log(bigger);