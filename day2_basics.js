// Day 2: JavaScript ES6+ Practice

// 1. Arrow Functions
console.log("Arrow Functions:")

const add = (a, b) => a + b
console.log("2 + 3 =", add(2, 3))

const greet = name => "Hello " + name
console.log(greet("Udath"))

// 2. Destructuring
console.log("\nDestructuring:")

const numbers = [10, 20, 30]
const [first, second] = numbers
console.log("First number:", first, "Second number:", second)

const person = { name: "Alice", age: 25 }
const { name, age } = person
console.log("Name:", name, "Age:", age)

// 3. Spread Operator
console.log("\nSpread Operator:")

const arr1 = [1, 2]
const arr2 = [3, 4]
const combined = [...arr1, ...arr2]
console.log("Combined array:", combined)

const obj1 = { a: 1 }
const obj2 = { b: 2 }
const merged = { ...obj1, ...obj2 }
console.log("Merged object:", merged)

// 4. Promises & Async/Await
console.log("\nPromises & Async/Await:")

function fakeApi() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Got data from server!"), 1000)
  })
}

fakeApi().then(result => console.log("Promise result:", result))

async function fetchData() {
  const data = await fakeApi()
  console.log("Async/Await result:", data)
}
fetchData()

// 5. Array Methods: map, filter, reduce
console.log("\nArray Methods:")

const nums = [1, 2, 3, 4, 5]

const doubled = nums.map(n => n * 2)
console.log("Doubled numbers:", doubled)

const evens = nums.filter(n => n % 2 === 0)
console.log("Even numbers:", evens)

const sum = nums.reduce((total, n) => total + n, 0)
console.log("Sum of numbers:", sum)


//*****************************************************************************************************************************************************
// 6. Mini Challenges
console.log("\nMini Challenges:")

// 1. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("")
}
console.log("Reverse 'hello':", reverseString("hello"))

// 2. Find the largest number
function findMax(arr) {
  return Math.max(...arr)
}
console.log("Largest in [5, 8, 2, 10]:", findMax([5, 8, 2, 10]))

// 3. Check prime
function isPrime(n) {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return false
  return true
}
console.log("7 is prime?", isPrime(7))

// 4. Flatten a simple nested array
function flatten(arr) {
  return arr.flat()
}
console.log("Flatten [[1,2],[3,4]]:", flatten([[1, 2], [3, 4]]))

// 5. Remove duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)]
}
console.log("Remove duplicates [1,2,2,3]:", removeDuplicates([1, 2, 2, 3]))

// 6. Count vowels in a string
function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0
}
console.log("Vowels in 'javascript':", countVowels("javascript"))

// 7. Factorial of a number
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1)
}
console.log("Factorial of 5:", factorial(5))

// 8. Find the longest word
function longestWord(str) {
  return str.split(" ").reduce((longest, word) =>
    word.length > longest.length ? word : longest
  )
}
console.log("Longest word:", longestWord("I am learning JavaScript today"))

// 9. Palindrome check
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "")
  return cleaned === cleaned.split("").reverse().join("")
}
console.log("Is 'racecar' a palindrome?", isPalindrome("racecar"))

// 10. FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz")
    else if (i % 3 === 0) console.log("Fizz")
    else if (i % 5 === 0) console.log("Buzz")
    else console.log(i)
  }
}
console.log("FizzBuzz up to 15:")
fizzBuzz(15)
