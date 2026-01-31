const name = "AJ";

//can remove: to make field take local var
const person = {
  name,
  age: 20,
  isSmart: true,
};

//destructuring objects
// const {name, age, isSmart} = person;

//spread means keep everything from object, but keep name as Jack
const person2 = { ...person, name: "Jack" };

console.log(person);
console.log(person2);

//how to add elements in array
const names = ["Bob", "jar", "churro"];
const names2 = [...names, "paps"];

//map function - want to alter each element individually
//() is element and arrow function is what happens to each element
//return will change what happens to each element
names.map((name) => {
  return name + "1";
});
//how to apply to react - print list of names
// names.map((name) => {
//   return <h1>{name}</h1>
// });

//filter - similar but function is used to filter out if it meets the condition
