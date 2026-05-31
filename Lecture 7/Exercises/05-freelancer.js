/**
 * 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(), რომელიც დათვლის შემოსავალს
 * შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ > 160 სთ).
 */

class Freelancer {
  constructor(hoursWorked, hourlyRate) {
    this.hoursWorked = hoursWorked;
    this.hourlyRate = hourlyRate;
  }

  calculateBaseIncome() {
    return this.hoursWorked * this.hourlyRate;
  }

  calculateBonus() {
    if (this.hoursWorked > 160) {
      return 500;
    }
    return 0;
  }

  calculateExpectedIncome() {
    return this.calculateBaseIncome() + this.calculateBonus();
  }
}

const freelancer = new Freelancer(170, 25);

console.log(freelancer.calculateExpectedIncome());
