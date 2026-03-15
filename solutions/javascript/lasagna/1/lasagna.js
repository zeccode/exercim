
export const EXPECTED_MINUTES_IN_OVEN = 40;

export const PREPARATION_MINUTES_PER_LAYER = 2;

export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}

export function preparationTimeInMinutes(numberOfLayers) {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  let valuePreparationTimeInMinutes = preparationTimeInMinutes(numberOfLayers)
  return valuePreparationTimeInMinutes + actualMinutesInOven
}
const total = totalTimeInMinutes(4, 15)
console.log(total);