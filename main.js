function filterByMinimumAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}

// Example usage:
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 },
    { name: 'Diana', age: 18 }
];

const filteredPeople = filterByMinimumAge(people, 21);
console.log(filteredPeople);
// Output: [
//   { name: 'Alice', age: 25 },
//   { name: 'Charlie', age: 30 }
// ]
