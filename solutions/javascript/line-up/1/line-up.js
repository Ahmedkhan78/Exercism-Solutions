//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  const n = Number(number)

  const getOrdinal = (num) => {
    if(num % 100 >= 11 && num %100 <= 13){
      return num + "th"
    }
    switch(num % 10){
      case 1: return num + "st";
      case 2: return num + "nd";
      case 3: return num + "rd";
      default: return num + "th";
    }
  };

  return `${name}, you are the ${getOrdinal(n)} customer we serve today. Thank you!`
};
