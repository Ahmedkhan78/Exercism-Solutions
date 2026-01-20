
export function canExecuteFastAttack(knightIsAwake) {
  if(knightIsAwake == true)
  {
    return false;
  }else if(knightIsAwake == false)
  {
    return true;
  }
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
 //canSpy can only work in 5 condition/cases which of it 4 are the condition that should be executed and one is not!
//false positive case Such as when everyone is sleep but it is not worth it to spy on them.
 return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    // Check if the archer is awake.
    // If the archer is awake, Annalyn cannot free the prisoner.
  if(archerIsAwake == true)
  {
    return false; // Early return because the archer being awake makes it too risky.
  }
    // If the archer is asleep, we proceed to check if the prisoner is awake.
    // Annalyn can only free the prisoner if the archer is asleep and the prisoner is awake.
  return prisonerIsAwake;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  if(petDogIsPresent){
    // Annalyn can free the prisoner if she has the dog and the archer is asleep
    return !archerIsAwake;
  }else
  {
        // Without the dog, Annalyn can only free the prisoner if:
        // - The prisoner is awake
        // - Both the knight and archer are asleep
    return prisonerIsAwake && !knightIsAwake && !archerIsAwake;
  }
}
