const lineColors = {
  1: "indigo",
  2: "pink",
  3: "emerald",
  4: "purple"
};
function getColorLine(colorType, lineNumber, variant) {
  return `${colorType}-${lineColors[lineNumber]}-${variant}`;
}
const busColors = {
  C1: "lime-500",
  C2: "sky-600",
  C3: "yellow-400",
  C4: "fuchsia-900",
  C5: "amber-500",
  C6: "cyan-400",
  C7: "yellow-600",
  C7ex: "yellow-800"
};
function getColorBus(colorType, busNumber) {
  return `${colorType}-${busColors[busNumber]}`;
}
export {
  getColorBus as a,
  getColorLine as g
};
