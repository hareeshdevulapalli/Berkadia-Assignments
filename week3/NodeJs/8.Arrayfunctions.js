/*
    map() : If i already have an array and i want to do the exact same operation on each of the elements in the array and return 
the same amount of items in the array, use the map.
    filter() : If i already have an array but i only want to have items in the array that match certain criteria, use the filter.
    reduce() : If i already have an array, but i want to use the values in that array to create something completely new, use the reduce.
*/
const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
];

let animal_name = animals.map((animal, index, animals) => {
    return animal.size==="small";
});
console.log(animal_name);//If we use conditions in map it will take boolean values.
//[ true, true, false, false ]

let animal_names = animals.map((animal, index, animals) => {
    return animal.name;
});
console.log(animal_names);//It assigns all animals names to one array.
//[ 'cat', 'dog', 'lion', 'elephant' ]

let small_animals = animals.filter((animal) => {
    return animal.size === "small"
});
console.log(small_animals);//It filters according to given condition.
//[ { name: 'cat', size: 'small', weight: 5 },
//{ name: 'dog', size: 'small', weight: 10 } ]

let total_weight = animals.reduce((weight, animal, index, animals) => {
    return weight += animal.weight
}, 0);
console.log(total_weight);//It reduce all related variables in to single unit.
//5165
