//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  const map = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };
  let rna = ""

  for (let nucleotide of dna){
    rna += map[nucleotide]
  }

  return rna
};
