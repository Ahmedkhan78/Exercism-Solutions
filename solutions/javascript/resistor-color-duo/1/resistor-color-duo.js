//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (color) => {
  const colorArray = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

  const first = colorArray.indexOf(color[0])
  const second = colorArray.indexOf(color[1])

  return first * 10 + second
};
