// Write a JavaScript program to test the first character of a string is uppercase or not.

const upper_case = (str) => {
  return str.match(/[a-z]/);
};

console.log(upper_case("guerito"));
