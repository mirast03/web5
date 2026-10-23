
let studentName = "Miras";
let studentGroup = "SE-2528";

console.log("Name: "+studentName);
console.log("Group: "+studentGroup);

window.addEventListener("load", function () {
  alert("Hello, JavaScript World!");
});
let course = "Web Technologies"; 
let a = 15;
let b = 4;
let isStudent = true;

console.log("--- Task 1: data types ---");
console.log("course:", course, "->", typeof course);
console.log("a:", a, "->", typeof a);
console.log("isStudent:", isStudent, "->", typeof isStudent);



console.log("--- Task 1: arithmetic ---");
console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b));
console.log("a % b = " + (a % b));
console.log("a ** 2 = " + (a ** 2));

console.log("--- Task 1: strings ---");
let greeting = "Hello, " + studentName+"!";
let info = "I study " + course + ". Am I a student? "+isStudent;
console.log(greeting);
console.log(info);
console.log(greeting+" "+info);
