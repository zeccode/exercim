/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 */
 export function cookingStatus(timer = null) {
   const status = timer === 0 ? 'Lasagna is done.' : timer > 0 ? 'Not done, please wait.' : timer || 'You forgot to set the timer.'
   return status
}
export function preparationTime(layers, timer = 2){
  const completedTime = layers.length * timer
  return completedTime
}
export function quantities(layers){
  let noodles = 0
  let sauce = 0
  layers.forEach((item) => {
    if(item === 'noodles'){
        noodles += 50
    } else if(item === 'sauce'){
       sauce += 0.2
    }
  })
  return {sauce, noodles}
}

export function addSecretIngredient(friendsList, myList){
  const secretItem = friendsList.length - 1
  myList.push(friendsList[secretItem])
  console.log(myList);
}
export function scaleRecipe(recipes, scale){
  const factor = scale / 2
  const newRecipes = {}
 for (const key in recipes) {
    newRecipes[key] = factor * recipes[key]
  }
  return newRecipes
}
