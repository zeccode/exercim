export function totalBirdCount(birdsPerDay) {
  let total = 0
  for(let i = 0; i < birdsPerDay.length; i++) {
    total = total + birdsPerDay[i]
  }
  return total
}

export function birdsInWeek(birdsPerDay, week) {
 let total = 0
  const limit = week * 7
  for(let i = limit - 7; i < birdsPerDay.length; i++){
    if(i == limit) break
    total = total + birdsPerDay[i]
  }
  return total
}

export function fixBirdCountLog(birdsPerDay) {
  for(let i = 0; i < birdsPerDay.length; i = i + 2){
     birdsPerDay[i] = birdsPerDay[i] + 1
  }
  return birdsPerDay
}
