/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time){
  if(time === undefined)
  {
    return "You forgot to set the timer."
  }
  if(time === 0)
  {
    return "Lasagna is done."
  }
  return "Not done, please wait."
}

 export function preparationTime(layers, avgtime=2){
    return layers.length * avgtime
 }


export function quantities(layers){
  let noodlesCount = 0
  let saucesCount = 0;
  for(let layer of layers)
    {
      if(layer === 'noodles'){
        noodlesCount++
      }else if(layer === 'sauce'){
        saucesCount++
      }
    }
  const noodles = noodlesCount * 50
  const sauce= saucesCount * 0.2
  return { noodles, sauce };
}

export function addSecretIngredient(friendsList, yourList) {
  // Get the last item from your friend's list
  const secretIngredient = friendsList[friendsList.length - 1];
  
  // Add the secret ingredient to your list (modifying it directly)
  yourList.push(secretIngredient);
}


export function scaleRecipe(recipe, portions) {
  // Create a new object to hold the scaled recipe
  let scaledRecipe = {};
  
  // Loop through each ingredient in the recipe
  for (let ingredient in recipe) {
    // Scale the amount for each ingredient and store it in the new object
    scaledRecipe[ingredient] = recipe[ingredient] * (portions / 2);
  }
  
  // Return the new scaled recipe object
  return scaledRecipe;
}