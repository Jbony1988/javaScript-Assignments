// homework.js

// Part 1: Variables
let myFavoriteFood = 'Pizza'; // Replace with your favorite food
const MY_BIRTH_YEAR = 1990; // Replace with your birth year
let isStudent = true; // Assign based on your status

console.log(myFavoriteFood, MY_BIRTH_YEAR, isStudent);

// Part 2: Objects
let myProfile = {
    name: 'John Doe', // Replace with your name
    age: 30, // Replace with your age
    city: 'New York', // Replace with your city
    hobbies: ['reading', 'gaming', 'hiking'], // Replace with your hobbies
    isEmployed: false // Replace with your employment status
};

console.log(myProfile);
console.log(myProfile.age);

myProfile.favoriteColor = 'Blue'; // Add a new property

// Part 3: Arrays
let myFavoriteFruits = ['Apple', 'Banana', 'Cherry'];
console.log(myFavoriteFruits[1]); // Log the second item

myFavoriteFruits.push('Mango'); // Add a new fruit
myFavoriteFruits.shift(); // Remove the first fruit

let mixedArray = ['Hello', 42, true, myProfile]; // Mixed data type array

// Part 4: Combining Concepts
let classroom = {
    teacher: 'Ms. Smith',
    students: ['Alice', 'Bob'],
    subject: 'Mathematics',
    addStudent: function (studentName) {
        this.students.push(studentName);
    }
};

classroom.addStudent('Charlie'); // Add a new student
console.log(classroom);

// Bonus: Check data types
console.log(typeof myFavoriteFood);
console.log(typeof MY_BIRTH_YEAR);
console.log(typeof isStudent);
console.log(typeof myProfile);
console.log(typeof myFavoriteFruits);
console.log(typeof classroom);

// Exporting variables and objects for testing
module.exports = {
    myFavoriteFood,
    MY_BIRTH_YEAR,
    isStudent,
    myProfile,
    myFavoriteFruits,
    mixedArray,
    classroom
};
