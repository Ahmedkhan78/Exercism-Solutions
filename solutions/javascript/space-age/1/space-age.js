//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planets,seconds) => {

  
  const earth_year_seconds = 31557600

  const orbitalPeriods = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };
  
  if(!orbitalPeriods[planets]){
    throw new Error("not a planet")
  }
  const planetYears = seconds / (earth_year_seconds * orbitalPeriods[planets])

  return Number(planetYears.toFixed(2));
  
};
