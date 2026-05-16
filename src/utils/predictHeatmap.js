export function predictHeatmap(vehicles) {
  // simple predictive model (upgrade later to ML model)

  if (vehicles > 25) return "red";
  if (vehicles > 12) return "yellow";
  return "green";
}