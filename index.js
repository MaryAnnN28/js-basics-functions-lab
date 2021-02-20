const distanceFromHqInBlocks = (numBlocks) => Math.abs(numBlocks - 42); 

const distanceFromHqInFeet = (numFeet) => distanceFromHqInFeet(numFeet) * 264

const distanceTravelledInFeet = (from, to) => Math.abs(to - from) * 264

const calculatesFarePrice = (from, to) => {
   const feet = distanceTravelledInFeet(from, to)
   if (feet <= 400) {
      return 0
   } else if (feet > 400 && feet < 2000) {
      reutrn(feet - 400) * 2 / 100
   } else if (feet > 2000 && feet < 2500) {
      return 25
   } else {
      return "cannot travel that far"
   }
}
   
console.log(calculatesFarePrice(34, 32));
