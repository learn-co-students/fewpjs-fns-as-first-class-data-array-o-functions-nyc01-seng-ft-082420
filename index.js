// function wakeDog(a, b) {
//     console.log("Wake ${dogName} the ${dogBreed}");
//   }

  let wakeDog = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }

  let leashDog = function(dogName="Boo Radley", dogBreed="Pibble") {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
  }

  let walkToPark = function(dogName="Bunny", dogBreed="Labrador") {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }

  let throwFrisbee = function(dogName="Mary J. Blige", dogBreed="Papillon") {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }

  let walkHome = function(dogName="Santa Paws", dogBreed="Husky") {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
  }

  let unleashDog = function(dogName="Lauren", dogBreed="Golden Retriever") {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
  }

  let routine = [ wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


  function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed))
  }