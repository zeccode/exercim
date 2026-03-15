
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  const spy = knightIsAwake || archerIsAwake || prisonerIsAwake
  return spy
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  const signal = !archerIsAwake && prisonerIsAwake
  return signal
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  return (petDogIsPresent && !archerIsAwake) || 
           (prisonerIsAwake && !knightIsAwake && !archerIsAwake);
}
