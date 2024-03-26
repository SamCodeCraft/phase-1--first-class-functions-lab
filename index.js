const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
   return drivers.slice(-2);
}

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers));

// array containing two elements (the first two previously defined functions)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function(drivers, selectingFunction) {
  return selectingFunction(drivers);
};
 
 
 
 




    

