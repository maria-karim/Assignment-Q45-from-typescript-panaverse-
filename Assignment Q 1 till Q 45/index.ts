//ASSIGNMENT FROM TYPESCRIPT PANAVERSE :
//Getting Started Exercises with TypeScript and Node.js
//Q :1 skipped..done
//Q :2 PERSONAL MESSAGE : Store a person's name in a variable and print a msg to that person, your message should be simple,such as "hello eric",would you like to learn some python today?
 
//let name : string = "Maria";
//console.log(`Hello ${name}, would you like to learn some Python today?`);


//Q :3Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// let myName : string = "Maria"; //title case:
// //lowercase:
// console.log("maria");
// //uppercase:
// console.log("MARIA");
// //titlecase:
//console.log("Maria");

//Q:4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”



// let quote: string = "Our doubts are traitors, and make us lose the good we oft might win by fearing to attempt.";
// let author: string = "William Shakespeare";

// console.log(`${author} said, "${quote}"`);


//Q:5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let shakes_peare: string = "William Shakespeare";
// let message: string = `"We know what we are, but know not what we may be.” — ${'shakes_peare'}`;

// console.log(message);

// Q:6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// let Name: string = "\t\n    DR. Mohammad Umer  \n\t";

// console.log("Original name: >", Name, "<");

// let Name: string = "Mohammad umer";

// console.log(" name: >", Name, "<");

// Q:8 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// let a: number = 3;
// let b: number = 5;
// let c: number = 12;
// let d: number = 4;
// let e: number = 2;
// let f: number = 4;
// let g: number = 16;
// let h: number = 2;

// console.log("Addition: ", a + b); // 8
// console.log("Subtraction: ", c - d); // 8
// console.log("Multiplication: ", e * f); // 8
// console.log("Division: ", g / h); // 8

// Q:9  Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

//  let favoriteNumber: number = 13;
// let message: string = `My favorite number is ${favoriteNumber}.`;

// console.log(message);

//Q:10  Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//Program 1: Favorite Number

// Maria, May 30, 2024
// This program prints a message revealing my favorite hobby.

// let hobby: string = "To explore new things";
// let Message: string = `My favorite hobby is ${hobby}.`;

// console.log(Message);

//Program 2: Quote and Author

// Maria, May 30, 2024
// This program prints a quote and its author.

// let shakes_peare: string = "William Shakespeare";
// let message: string = `"& i belive "DO GOOD HAVE GOOD” by the qoute of — ${shakes_peare}`;

// console.log(message);

//// 10 Questions  solving task  done> ....

//############################### Q 11 to 45 ############################################# 3/sep/2024


// Q 11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// Array to store the names of your friends
const names: string[] = ['amna', 'toba', 'sara', 'sumya'];

// Loop through the array and print each name
names.forEach((name) => {
    console.log(name);
});

//Q 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


// Array to store the names of your friends
const Mynames: string[] = ['amna', 'toba', 'sara', 'sumya'];

// Loop through the array and print a personalized greeting
names.forEach((name) => {
    console.log(`Hello, ${name}! Hope you're having a great day!`);
});
//12: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


// Array to store favorite modes of transportation
const transportation: string[] = ['yaris car', ' motorcycle', 'Yamaha bike', 'BMW car', 'mira'];

// Loop through the array and print personalized statements
transportation.forEach((item) => {
    console.log(`I would like to own a ${item}.`);
});




// 13..Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


// Array to store the names of people you'd like to invite to dinner
// const guestList: string[] = ['nida', 'Mariya', 'arsalan'];

// // Loop through the array and print a personalized invitation for each guest
// guestList.forEach((guest) => {
//     console.log(`Dear ${guest}, I would be invite you for dinner. Please join me for a delightful evening!`);
// });






// // 15::Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// // • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// // • Print a second set of invitation messages, one for each person who is still in your list.



// Initial guest list
// let guestList: string[] = ['nida', 'Marieya', 'Eliza'];

// // First set of invitations
// guestList.forEach((guest) => {
//     console.log(`Dear ${guest}, I would be honored to invite you to dinner. Please join me for a delightful evening!`);
// });

// // Announce that one guest can't make it
// const guestWhoCantMakeIt = 'Marieya';
// console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);

// // Replace the guest who can't make it with a new guest
// guestList[guestList.indexOf(guestWhoCantMakeIt)] = 'Ibtehaj';

// Second set of invitations
// console.log("\nSending out a new set of invitations:\n");
// guestList.forEach((guest) => {
//     console.log(`hi ${guest}, I would be honored to invite you to dinner. Please join me for a delightful evening!`);
// });




// 17 :More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



// Initial guest list
let guestList: string[] = ['Amna', 'sadia', 'muskan'];

// First set of invitations
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, I would be honored to invite you to dinner. Please join me for a delightful evening!`);
});

// Announce that a bigger dinner table is available
console.log("\nGreat news! We found a bigger dinner table, so we can invite more guests!\n");

// Add one guest to the beginning
guestList.unshift('Nida');

// Add one guest to the middle
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, 'hina');

// Add one guest to the end using push()
guestList.push('Adila');

// New set of invitations
console.log("Sending out a new set of invitations:\n");
guestList.forEach


// 18:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.




// Initial guest list with more guests
// let guestList: string[] = ['Nida', 'Anum', 'hadia','farah'];

// // Inform that you can only invite two people
// console.log("\nUnfortunately, my new dinner table won't arrive in time, and I can only invite two people to dinner.\n");

// // Remove guests until only two remain
// while (guestList.length > 2) {
//     const removedGuest = guestList.pop(); // Remove the last guest
//     if (removedGuest) {
//         console.log(`Sorry, ${removedGuest}, I can no longer invite you to dinner.`);
//     }
// }

// // Inform the two remaining guests that they're still invited
// guestList.forEach((guest) => {
//     console.log(`Dear ${guest}, you're still invited to the dinner! Looking forward to seeing you!`);
// });

// Remove the final two guests and ensure the list is empty
guestList.pop();
guestList.pop();

console.log("\nFinal guest list:", guestList); // Should be an empty list

// 19,..Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// Array to store places I want to visit (not in alphabetical order)
const places: string[] = ['pakistan', 'New York', 'Paris', 'saudia', 'Sydney'];

// Print the array in its original order
console.log('Original order:', places);

// Print the array in alphabetical order without modifying the actual list
console.log('Alphabetical order (without modifying the original list):', [...places].sort());

// Show the array is still in its original order
console.log('Still in original order:', places);

// Print the array in reverse alphabetical order without changing the original list
console.log('Reverse alphabetical order (without modifying the original list):', [...places].sort().reverse());

// Show the array is still in its original order
console.log('Still in original order:', places);

// Reverse the order of the list and print it
places.reverse();
console.log('After reversing the order:', places);

// Reverse the order of the list again and print it to return to the original order
places.reverse();
console.log('After reversing again (back to original order):', places);

// Sort the array in alphabetical order and print it (modifies the original list)
places.sort();
console.log('After sorting alphabetically:', places);

// Sort the array in reverse alphabetical order and print it (modifies the original list)
places.sort((a, b) => b.localeCompare(a));
console.log('After sorting in reverse alphabetical order:', places);


// 20....Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Array to store a list of languages
// const languages: string[] = ['English', 'arabic', 'urdu', 'punjabi', 'German'];

// // Loop through the array and print each language
// languages.forEach((language) => {
//     console.log(language);
// });


// 21..They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// Create an object to store information about a book
const book: { title: string; author: string; year: number;} = {
    title: 'sachaay moti',
    author: 'allama iqbal',
    year: 1925,
   
};

// Print the properties of the book object
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Year of Publication: ${book.year}`);


//23 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Array of languages
const languages: string[] = ['English', 'Spanish', 'Mandarin', 'French', 'German'];

// Trying to access an index that doesn't exist (index 5, but valid indices are 0-4)
console.log(`Language at index 5: ${languages[5]}`); // This will produce an undefined value or index error




// 24..Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


// 5 Tests that evaluate to True
let car = 'subaru';
let color = 'blue';
let age = 25;
let height = 180; // in cm
let language = 'English';

// 5 Tests that evaluate to True
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is color == 'blue'? I predict True.");
console.log(color == 'blue'); // True

console.log("Is age >= 18? I predict True.");
console.log(age >= 18); // True

console.log("Is height > 150? I predict True.");
console.log(height > 150); // True

console.log("Is language == 'English'? I predict True.");
console.log(language == 'English'); // True

// 5 Tests that evaluate to False
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False

console.log("Is color == 'red'? I predict False.");
console.log(color == 'red'); // False

console.log("Is age < 18? I predict False.");
console.log(age < 18); // False

console.log("Is height < 150? I predict False.");
console.log(height < 150); // False

console.log("Is language == 'Spanish'? I predict False.");
console.log(language == 'Spanish'); // False


//25 • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// Strings and equality/inequality tests
let city = 'New York';
let country = 'USA';
let favoriteCity = 'new york'; // Case-insensitive comparison

console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York'); // True

console.log("Is city != 'Los Angeles'? I predict True.");
console.log(city != 'Los Angeles'); // True

console.log("Is city == 'new york' using toLowerCase()? I predict True.");
console.log(city.toLowerCase() == favoriteCity.toLowerCase()); // True

console.log("Is country == 'usa' using toLowerCase()? I predict True.");
console.log(country.toLowerCase() == 'usa'); // True

console.log("Is country != 'UK'? I predict True.");
console.log(country != 'UK'); // True

console.log("Is country == 'CANADA'? I predict False.");
console.log(country == 'CANADA'); // False

// Numerical tests
let number = 25;

console.log("Is number == 25? I predict True.");
console.log(number == 25); // True

console.log("Is number != 30? I predict True.");
console.log(number != 30); // True

console.log("Is number > 20? I predict True.");
console.log(number > 20); // True

console.log("Is number < 20? I predict False.");
console.log(number < 20); // False

console.log("Is number >= 25? I predict True.");
console.log(number >= 25); // True

console.log("Is number <= 20? I predict False.");
console.log(number <= 20); // False

// 26..Logical operators
// Strings and equality/inequality tests
// let city = 'New York';
// let country = 'USA';
// let favoriteCity = 'new york'; // Case-insensitive comparison

// console.log("Is city == 'New York'? I predict True.");
// console.log(city == 'New York'); // True

// console.log("Is city != 'Lahore'? I predict True.");
// console.log(city != 'Lahore'); // True

// console.log("Is city == 'new york' using toLowerCase()? I predict True.");
// console.log(city.toLowerCase() == favoriteCity.toLowerCase()); // True

// console.log("Is country == 'usa' using toLowerCase()? I predict True.");
// console.log(country.toLowerCase() == 'usa'); // True

// console.log("Is country != 'UK'? I predict True.");
// console.log(country != 'UK'); // True

// console.log("Is country == 'CANADA'? I predict False.");
// console.log(country == 'CANADA'); // False

// // Numerical tests
// let number = 25;

// console.log("Is number == 25? I predict True.");
// console.log(number == 25); // True

// console.log("Is number != 30? I predict True.");
// console.log(number != 30); // True

// console.log("Is number > 20? I predict True.");
// console.log(number > 20); // True

// console.log("Is number < 20? I predict False.");
// console.log(number < 20); // False

// console.log("Is number >= 25? I predict True.");
// console.log(number >= 25); // True

// console.log("Is number <= 20? I predict False.");
// console.log(number <= 20); // False

// // 27.. Logical operators
// let isSunny = true;
// let isWeekend = false;

// console.log("Is it sunny and weekend? I predict False.");
// console.log(isSunny && isWeekend); // False

// console.log("Is it sunny or weekend? I predict True.");
// console.log(isSunny || isWeekend); // True

// // Array membership tests
let fruits = ['apple', 'banana', 'cherry'];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana')); // True

console.log("Is 'orange' not in the fruits array? I predict True.");
console.log(!fruits.includes('orange')); // True

console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(!fruits.includes('apple')); // False

// // 28,,,,Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// // • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// // Version that passes the if test

// // Alien color
// let alien_color = 'green';

// // Check if the alien's color is green
// if (alien_color === 'green') {
//     console.log("Congratulations! You've just earned 5 points.");
// }
// // Version that fails the if test

// // Alien color
// // let alien_color = 'red';

// // // Check if the alien's color is green
// // if (alien_color === 'green') {
// //     console.log("Congratulations! You've just earned 5 points.");
// // }

// // 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


// Create an array of your favorite fruits
let favorite_fruits: string[] = ['mango', 'banana', 'apple'];

// Check for certain fruits in your array using independent if statements
if (favorite_fruits.includes('mango')) {
    console.log('You really like mangoes!');
}

if (favorite_fruits.includes('banana')) {
    console.log('You really like bananas!');
}

if (favorite_fruits.includes('apple')) {
    console.log('You really like apples!');
}

if (favorite_fruits.includes('orange')) {
    console.log('You really like oranges!');
}

if (favorite_fruits.includes('grape')) {
    console.log('You really like grapes!');
}



// Q:30.....Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// Create an array of usernames, including 'admin'
let usernames: string[] = ['admin', 'eric', 'maria', 'sara', 'sadia'];

// Loop through the array of usernames
for (let username of usernames) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// Q 33..Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


// Store the numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array of numbers
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}
// Q 34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// Store your favorite pizzas in an array
let favorite_pizzas: string[] = ['pepperoni', 'margherita', 'bbq chicken'];

// Use a for loop to print a sentence about each pizza
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Add a final statement outside the loop
console.log("\nI really love pizza!");


// Q 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// Store the names of animals in an array
let animals: string[] = ['dog', 'cat', 'rabbit'];

// Use a for loop to print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Add a final statement outside the loop
console.log("\nAny of these animals would make a great pet!");


//  37....QT-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// Function that accepts size and message, and prints the details
// function make_shirt(size: string, message: string): void {
//     console.log(`The shirt size is ${size}, and it will have the message: "${message}" printed on it.`);
// }

// // Call the function with specific arguments
// make_shirt('Large', 'TypeScript Rocks!');

// Q38..
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Function that accepts size and message, with default values for size and message
function make_shirt(size: string = 'Large', message: string = 'I love typscript'): void {
    console.log(`The shirt size is ${size}, and it will have the message: "${message}" printed on it.`);
}

// Call the function for a large shirt with default message
make_shirt(); // Large shirt, default message

// Call the function for a medium shirt with default message
make_shirt('Medium'); // Medium shirt, default message

// Call the function for a small shirt with a custom message
make_shirt('Small', 'Code your future!'); // Small shirt, custom message


// Q..39
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

// Function that accepts city and country, with a default value for the country
function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi'); // Default country, Pakistan
describe_city('Lahore');  // Default country, Pakistan
describe_city('New York', 'USA'); // Custom country, USA

// #40.
// Q 41...Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Function to print the names of magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician names
let magicians: string[] = ['zakota', 'Horror cats', 'black magic uncle'];

// Call the function and pass the array
show_magicians(magicians);

// Q42....Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Function to print the names of magicians
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
// //     }
// }

// Function to modify the array by adding 'the Great' to each magician's name
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
//43... Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Array of magician names
// let magicians: string[] = ['zakota', 'Horror cats', 'black magic uncle'];


// // Call make_great to modify the list
// make_great(magicians);

// // Call show_magicians to verify the list has been modified
// show_magicians(magicians);

// Q44...Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Function to accept a variable number of sandwich items and print a summary
function make_sandwich(...items: string[]): void {
    console.log("\nYour sandwich will have the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
}

// Call the function with different numbers of arguments
make_sandwich('lettuce', 'tomato', 'bacon');
make_sandwich('turkey', 'cheese');
make_sandwich('egg', 'mustard', 'onions')


// Q45..Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Function to store information about a car
function make_car(manufacturer: string, model: string, ...options: [string, any][]): object {
    // Create an object with the manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add additional options (key-value pairs) to the car object
    for (let [key, value] of options) {
        car[key] = value;
    }

    return car;
}

// Call the function with required information and two additional name-value pairs
let myCar = make_car('Toyota', 'Corolla', ['color', 'red'], ['sunroof', true]);

// Print the object to verify all information is stored
console.log(myCar);

// #####################################...completed...########################################################