/**
 * 2) დაბეჭდე მასივის ელემენტები უკუღმა let arr = [1,2,3,4,5]
 */

let arr = [1, 2, 3, 4, 5];
//let copiedArr = [...arr];

console.log(arr.reverse());

// reverse() მეთოდი თავდაპირველი მასივის მიმდევრობასაც ცვლის, ამიტომ თუ გვინდა ორიგინალური მასივი უცვლელი დარჩეს, უნდა შევქმნათ მისი ასლი.

// console.log(copiedArr);

// OR
let arr1 = [1, 2, 3, 4, 5];
for (let i = arr1.length - 1; i >= 0; i--) {
    console.log(arr1[i]);
}