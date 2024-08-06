export const distance = (source: string, destination: string) => {
  const sourceCoordinates = source.split(", ");
  const destinationCoordinates = destination.split(", ");
  const sourceLat = (parseFloat(sourceCoordinates[0]) * Math.PI) / 180;
  const sourceLong = (parseFloat(sourceCoordinates[1]) * Math.PI) / 180;
  const destinatonLat = (parseFloat(destinationCoordinates[0]) * Math.PI) / 180;
  const destinationLong =
    (parseFloat(destinationCoordinates[1]) * Math.PI) / 180;

  let deltaLong = destinationLong - sourceLong;
  let deltaLat = destinatonLat - sourceLat;
  let a =
    Math.pow(Math.sin(deltaLat / 2), 2) +
    Math.cos(sourceLat) *
      Math.cos(destinatonLat) *
      Math.pow(Math.sin(deltaLong / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in kilometers. Use 3956
  // for miles
  let r = 6371;

  // calculate the result
  return c * r;
};
