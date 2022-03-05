const myHeading = document.querySelector("#title");
myHeading.textContent = "Full Stack Project Group! Hello!!!";

const myNumber = document.querySelector("#number");
myNumber.textContent = "8";

console.log(typeof myHeading.textContent);
console.log(typeof myNumber.textContent);

console.log(4 !== 4);

// let iceCream = "chocolate";

// if (iceCream === "vanilla") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite...");
// }

// let num1 = 5;
// let num2 = 4;

function multiply1(num1, num2) {
  let result = num1 * num2;
  return result;
}
console.log("multiply1", multiply1(4, 4));

const multiply2 = (num1, num2) => {
  return num1 * num2;
};
console.log("multiply2", multiply2(4, 4));

console.log(
  "multiply3",
  (function (num1, num2) {
    return num1 * num2;
  })(3, 4)
);

const multiply4 = function (num1, num2) {
  return num1 * num2;
};

console.log("multiply4", multiply4(4, 4));
