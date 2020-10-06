var wakeDog = function(dogName, dogBreed) {
  let output = `Wake ${dogName} the ${dogBreed}`
  console.log(output);
  return output
}
var leashDog = function(dogName, dogBreed) {
  let output = `Leash ${dogName} the ${dogBreed}`
  console.log(output);
  return output
}
var walkToPark = function(dogName, dogBreed) {
  let output = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(output);
  return output
}
var throwFrisbee = function(dogName, dogBreed) {
  let output = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(output);
  return output
}
var walkHome = function(dogName, dogBreed) {
  let output = `Walk home with ${dogName} the ${dogBreed}`
  console.log(output);
  return output
}
var unleashDog = function(dogName, dogBreed) {
  let output = `Unleash ${dogName} the ${dogBreed}`
  console.log(output);
  return output
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


function exerciseDog(dog, breed) {
  return routine.map(fn => fn(dog, breed))
}
