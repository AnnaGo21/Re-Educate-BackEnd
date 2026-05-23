/**
 * 5) დააწყვილე reduce-თ ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
 */

let people = [
  { name: "Giorgi", age: 25 },
  { name: "Nika", age: 5 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 8 },
];

let groupedPeople = people.reduce(
  (acc, cur) => {
    if (cur.age > 10) acc.moreThan20.push(cur);
    else acc.lessOrEqual20.push(cur);
    return acc;
  },
  {
    moreThan20: [],
    lessOrEqual20: [],
  },
);

console.log(groupedPeople);
