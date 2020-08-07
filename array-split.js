
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const part = nums.slice(2, 5); // count starting index to end index
const remove = nums.splice(2, 4, 77);

// console.log(remove);
// console.log(nums);

const together = nums.join("ami, ");
console.log(together);