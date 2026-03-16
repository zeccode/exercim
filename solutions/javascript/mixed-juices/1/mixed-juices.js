// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  name = name.toLowerCase()
  switch(name){
  case 'pure strawberry joy': 
  return 0.5
  case 'energizer':
    case 'green garden': 
  return 1.5
  case 'tropical island': 
  return 3
  case 'all or nothing': 
  return 5
  default:
  return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let count = 0
  let slices = 0
  while(count < limes.length){
    if(slices >= wedgesNeeded) break
    switch(limes[count]){
      case 'small': 
        slices += 6;
        break;
      case 'medium': 
        slices +=  8;
        break;
      case 'large': 
        slices +=  10;
        break;
      }
    count++
    }            
  return count
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time = 0
  let count = 0
  for(const order of orders){
    if(time >= timeLeft) break
    time += timeToMixJuice(order)
    count ++
  }
  orders.splice(0, count)
  return orders
}
