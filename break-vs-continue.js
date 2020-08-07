
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {

//     if (numbers[i] > 3) {
//         break;
//     }
//     console.log(numbers[i]);

// }


const numbers2 = [1, 2, -3, -4, 5, -6, 7, -8, 9];

for (let i = 0; i < numbers2.length; i++) {

    if (numbers2[i] < 0) {
        continue;
    }
    console.log(numbers2[i]);

}