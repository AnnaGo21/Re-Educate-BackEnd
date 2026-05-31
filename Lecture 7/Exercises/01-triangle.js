/**
 * 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები:
 * getPerimeter(), getArea() , isRightTriangle().
 */

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }

  getArea() {
    let s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)); // სამკუთხედის სამი გვერდით ფართობის გაგების ფუნქცია
  }

  isRightTriangle() {
    let sides = [this.a, this.b, this.c].sort((a, b) => a - b); // რომ გავიგოთ რომელია უდიდესი გვერდი
    return sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2; //ჩავწეროთ პითაგორას თეორემა
  }
}

let triangle = new Triangle(3, 4, 5);

console.log("Perimeter:", triangle.getPerimeter());
console.log("Area:", triangle.getArea());
console.log("Is triangle right:", triangle.isRightTriangle());
