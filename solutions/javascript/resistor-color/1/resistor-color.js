//
// This is only a SKELETON file for the 'Resistor Color' exercise.
//

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];

export const colorCode = (color) => {
  return COLORS.indexOf(color);
};

export const colors = () => {
  return COLORS;
};