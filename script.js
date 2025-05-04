// Array of characters that can be used in the password
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Get references to the two password display elements in the DOM
let firstPasswordEl = document.getElementById("firstPassword");
let secondPasswordEl = document.getElementById("secondPassword");

// Function that generates two random 12-character passwords
function randomPasswordGenerator() {
  let password = ""; // first password
  let password2 = ""; // second password

  // Generate first password by randomly selecting 12 characters
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  // Generate second password using same logic
  for (let i = 0; i < 15; i++) {
    let randomIndex2 = Math.floor(Math.random() * characters.length);
    password2 += characters[randomIndex2];
  }

  // Display the generated passwords in the HTML elements
  firstPasswordEl.textContent = password;
  secondPasswordEl.textContent = password2;
}

// Get reference to the "Generate Passwords" button
const button = document.getElementById("generate-btn");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Add CSS class that triggers a glow animation
  button.classList.add("glow-on-click");

  // Wait for the animation to finish, then remove the class
  // so it can be triggered again next time
  button.addEventListener("animationend",() => {
      button.classList.remove("glow-on-click");
    },{ once: true }
  ); // This ensures it only runs once per click

  // Call the password generator function
  randomPasswordGenerator();
});
