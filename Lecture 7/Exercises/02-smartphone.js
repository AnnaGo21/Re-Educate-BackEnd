/**
 * 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear. გააკეთე ექსტენშენი GamingPhone,
 * რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().
 */

class Smartphone {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }
}

class GamingPhone extends Smartphone {
  constructor(brand, model, releaseYear, gpuScore, batteryCapacity) {
    super(brand, model, releaseYear);
    this.gpuScore = gpuScore;
    this.batteryCapacity = batteryCapacity;
  }

  performanceIndex() {
    return this.gpuScore * 0.7 + this.batteryCapacity * 0.3; // Weighted formula
  }
}

let phone = new GamingPhone("Apple", "iPhone 15 Pro Max", 2024, 780, 4422);
console.log(phone.performanceIndex());
