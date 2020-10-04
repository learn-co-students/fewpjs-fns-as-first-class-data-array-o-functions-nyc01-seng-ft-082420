// console.log("Wake Byron the poodle");
//console.log("Leash Byron the poodle");
//console.log("Walk to the park with Byron the poodle");
//console.log("Throw the frisbee for Byron the poodle");
//console.log("Walk home with Byron the poodle");
//console.log("Unleash Byron the poodle"); 

function wakeDog(dogName) {
    return `Wake ${dogName}`
};

function leashDog(dogName) {
    return `Leash ${dogName}`
};

function walkDog(dogName) {
    return `Walk to the park with ${dogName}`
};

function playWithDog(dogName) {
    return `Throw the frisbee for ${dogName}`
};

function walkDog(dogName) {
    return `Walk home with ${dogName}`
};

function unleashDog(dogName) {
  return `Unleash ${dogName}`  
};

let routine = [
    wakeDog,
    leashDog,
    walkDog,
    playWithDog,
    walkDog,
    unleashDog
];


function exerciseDog(dogName) {
    let returnValues = []
    for (let i = 0; i < routine.length; i++) {
        returnValues.push(routine[i](dogName))
    }
return returnValues
};