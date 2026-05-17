/**
 * 5)დაალაგე ზრდადობით rating-ის მიხედვით
 */

const movies = [
  { title: "Inception", rating: 9 },
  { title: "Avatar", rating: 7.5 },
  { title: "Joker", rating: 8.2 },
  { title: "Tenet", rating: 6.9 },
];

movies.sort((a, b) => a.rating - b.rating);
console.log(movies);
