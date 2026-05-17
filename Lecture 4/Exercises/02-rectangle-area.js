/**
 * 2)შექმენი ობიექტი, რომელსაც ექნება width, height და getArea() მეთოდი, რომელიც დააბრუნებს ფართობს.
 */

const rectangleProperties = {
  width: 5,
  height: 4,
  getArea: function () {
    return this.width * this.height;
  },
  //OR directly
  //   getArea() {
  //     return this.width * this.height;
  //   },
};

console.log(rectangleProperties.getArea());
