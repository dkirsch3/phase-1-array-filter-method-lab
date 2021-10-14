// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
    const newDrivers = drivers.filter(function(person){
        return person.toLowerCase() === name.toLowerCase()
    });
    return newDrivers;
}
console.log(findMatching(drivers,'sammy'))

function fuzzyMatch(drivers, name) {
    const shortDrivers = drivers.filter(function(person){
        return person.slice(0,2) === name.slice(0,2)
    });
    return shortDrivers;
}

console.log(fuzzyMatch(drivers,'Sa'))

function matchName(drivers, name) {
    const town = drivers.filter(function(person){
        return person.name === name
    })
    return town;
}