
export const isPangram = (sentence) => {
  const alphabet  = "abcdefghijklmnopqrstuvwxyz"
  const lower = sentence.toLowerCase()

  for (let letter of alphabet){
    if(!lower.includes(letter)){
      return false
    }
  }
  return true
};
