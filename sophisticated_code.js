/* 
Filename: sophisticated_code.js
Content: A sophisticated and complex JavaScript code demonstrating object-oriented programming concepts, asynchronous operations, error handling, and manipulation of large data sets.
*/

// Helper function to generate a random number between a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Generate an array of 1000 Person objects with random names and ages
const people = [];
for (let i = 0; i < 1000; i++) {
  const person = new Person(`Person ${i}`, getRandomNumber(18, 60));
  people.push(person);
}

// Function to asynchronously calculate the average age of a given array of people
async function calculateAverageAge() {
  let totalAge = 0;
  for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
  }
  const averageAge = totalAge / people.length;

  // Artificial delay to simulate an asynchronous operation
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return averageAge;
}

// Promise-based function to fetch data from an API
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate API request success with randomly generated data
      if (getRandomNumber(0, 1)) {
        resolve({ data: `Data from ${url}` });
      } else {
        reject(new Error(`Failed to fetch data from ${url}`));
      }
    }, 1500);
  });
}

// Perform a series of asynchronous operations
async function performAsyncOperations() {
  try {
    const averageAge = await calculateAverageAge();
    console.log(`Average age: ${averageAge}`);

    const data1 = await fetchData('https://api.example.com/data1');
    console.log(data1.data);

    const data2 = await fetchData('https://api.example.com/data2');
    console.log(data2.data);

    // ...

    const dataN = await fetchData('https://api.example.com/dataN');
    console.log(dataN.data);

  } catch (error) {
    console.error(error);
  }
}

// Initiate the asynchronous operations
performAsyncOperations();