// homework.test.js
const {
    myFavoriteFood,
    MY_BIRTH_YEAR,
    isStudent,
    myProfile,
    myFavoriteFruits,
    mixedArray,
    classroom
} = require('./homework');

describe('Homework Assignment Tests', () => {
    test('Part 1: Variables', () => {
        expect(myFavoriteFood).toBe('Pizza'); // Replace with your favorite food
        expect(MY_BIRTH_YEAR).toBe(1990); // Replace with your birth year
        expect(isStudent).toBe(true); // Replace with your student status
    });

    test('Part 2: Objects', () => {
        expect(myProfile).toHaveProperty('name', 'John Doe'); // Replace with your name
        expect(myProfile).toHaveProperty('age', 30); // Replace with your age
        expect(myProfile).toHaveProperty('favoriteColor', 'Blue');
        expect(myProfile.hobbies).toContain('reading'); // Check if a hobby exists
    });

    test('Part 3: Arrays', () => {
        expect(myFavoriteFruits[1]).toBe('Cherry'); // Change this line
        expect(myFavoriteFruits).toContain('Mango'); // Check if Mango was added
        expect(myFavoriteFruits).not.toContain('Apple'); // Check if Apple was removed
        expect(mixedArray).toContain(myProfile); // Check if myProfile is in mixedArray
    });
    

    test('Part 4: Combining Concepts', () => {
        expect(classroom.students).toContain('Charlie'); // Check if Charlie was added
        expect(classroom).toHaveProperty('teacher', 'Ms. Smith');
        expect(classroom).toHaveProperty('subject', 'Mathematics');
    });

    test('Bonus: Data Types', () => {
        expect(typeof myFavoriteFood).toBe('string');
        expect(typeof MY_BIRTH_YEAR).toBe('number');
        expect(typeof isStudent).toBe('boolean');
        expect(typeof myProfile).toBe('object');
        expect(typeof myFavoriteFruits).toBe('object'); // Arrays are objects
        expect(typeof classroom).toBe('object');
    });
});
