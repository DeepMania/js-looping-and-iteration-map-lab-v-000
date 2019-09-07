// Code your solution in this file.
function lowerCaseDrivers (drivers) {
 let lowerCaseNames = drivers.map(function (name) {return name.toLowerCase()})
 return lowerCaseNames;
}
function nameToAttributes (drivers) {

  let driversObject = drivers.map(function (name) {for name of drivers
  {return {drivers[0]: drivers[1]}}})
  return driversObject;
}
