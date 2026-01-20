
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0;
  if (birdsPerDay === null) {
    return 0;
  }
  for(let i=0; i< birdsPerDay.length; i++)
    {
      count += birdsPerDay[i];
    }
  return count;
  
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  //Approach 1: using one Math.min if only if there is Array element extended to find out what will be the last index;
  let starIndex = (week - 1) * 7;
  let endIndex = Math.min(starIndex + 7, birdsPerDay.length);
  
  //corner case to determine if there is no out of bound index;
  if (starIndex >= birdsPerDay.length) {
    return 0;
  }
  
  let count = 0;
  for(let i = starIndex; i< endIndex; i++)
    {
        count += birdsPerDay[i];
    }
  return count;
  
  //Approach 2: using array methods
  /*
  let startIndex = (week - 1) * 7;
  let endIndex = Math.min(startIndex + 7, birdsPerDay.length);

  const weekSlice = birdsPerDay.slice(startIndex, endIndex);

  const totalBirds = weekSlice.reduce( (sum, birds) => sum + birds, 0);
  return totalBirds;
  */
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */

export function fixBirdCountLog(birdsPerDay) {
//on a given instruction the birds array element shows that 0 exist in even place if we build a program that takes even place index to replace and modify the array element then approach goes like this.
//Approach 1: if only when birds were missing in even days
  //the increment will be now on +2 based so it will find the even days scenarios where birds are missing in counting

for(let i = 0; i< birdsPerDay.length; i += 2)
  {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
  //it will work on a given array of birds in instruction but it will not work when elements will appear in odds or odds and even both of it!
  
//Approach 2: this Appraoch will work on both the Scenario when days when missing will occur in odd and even days too!
/*
for(let i=0; i< birdsPerDay.length; i++)
  {
    birdsPerDay[i] += 1;
  }
return birdsPerDay;
*/
}

