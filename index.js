var wakeDog = function (name='Byron', breed='poodle') {
  console.log(`Wake ${name} the ${breed}`);
  return `Wake ${name} the ${breed}`
}

var leashDog = function (name='Byron', breed='poodle') {
  console.log(`Leash ${name} the ${breed}`);
  return `Leash ${name} the ${breed}`
}

var walkToPark = function (name='Byron', breed='poodle') {
  console.log(`Walk to the park with ${name} the ${breed}`);
  return `Walk to the park with ${name} the ${breed}`
}

var throwFrisbee = function (name='Byron', breed='poodle') {
  console.log(`Throw the frisbee for ${name} the ${breed}`);
  return `Throw the frisbee for ${name} the ${breed}`
}

var walkHome = function (name='Byron', breed='poodle') {
  console.log(`Walk home with ${name} the ${breed}`);
  return `Walk home with ${name} the ${breed}`
}

var unleashDog = function (name='Byron', breed='poodle') {
  console.log(`Unleash ${name} the ${breed}`);
  return `Unleash ${name} the ${breed}`
}


const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog, breed){
  return routine.map(fn => fn(dog, breed))
}
