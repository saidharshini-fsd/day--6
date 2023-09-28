//4.
class UberPriceCalculator  { 

    constructor(baseFare, perMinuteRate, perMileRate) {
      this.baseFare = baseFare;         
      this.perMinuteRate = perMinuteRate;
      this.perMileRate = perMileRate;   
    }

  
    calculatePrice(distanceInMiles, durationInMinutes)
     {
      const fare = this.baseFare + 
                   (this.perMinuteRate * durationInMinutes) +
                   (this.perMileRate * distanceInMiles);
  
      return fare;
    }

  }
  
  const calculator = new UberPriceCalculator(2.5, 0.3, 1.25); 
  const distance = 10; 
  const duration = 20; 
  
  const price = calculator.calculatePrice(distance, duration);
  console.log(`Uber Price for ${distance} miles: $${price.toFixed(2)}`);// Uber Price for 10 miles: $21.00
  
  
  