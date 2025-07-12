// === let ===
let name = "Juan Cruz"; // Can be reassigned later
console.log("let name:", name);
console.log("typeof name:", typeof name);

name = "Maria Lopez";
console.log("Updated let name:", name);

// === const ===
const pi = 3.14159;
console.log("const pi:", pi);
console.log("typeof pi:", typeof pi);

// Uncomment to test const reassignment error:
// pi = 3.14; // ❌ Will throw an error

// === var ===
var language = "JavaScript";
console.log("var language:", language);
console.log("typeof language:", typeof language);

language = "TypeScript";
console.log("Updated var language:", language);

// === typeof examples ===
let age = 25;
let isStudent = true;
let address = { city: "Manila", country: "Philippines" };
let hobbies = ["reading", "coding", "traveling"];
let unknown;

console.log("typeof age:", typeof age);         // number
console.log("typeof isStudent:", typeof isStudent); // boolean
console.log("typeof address:", typeof address);     // object
console.log("typeof hobbies:", typeof hobbies);     // object
console.log("typeof unknown:", typeof unknown);     // undefined

// === Scope demo ===
{
  let blockLet = "I'm block scoped";
  const blockConst = "Me too!";
  var functionVar = "I'm function scoped";

  console.log(blockLet);     // OK
  console.log(blockConst);   // OK
  console.log(functionVar);  // OK
}

// console.log(blockLet);    // ❌ Error: blockLet is not defined
// console.log(blockConst);  // ❌ Error: blockConst is not defined
console.log(functionVar);    // ✅ Still accessible
