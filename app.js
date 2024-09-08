"usestrict";

// we create 2 variable becuse we want to use them for guessing number between 1 and 100
const min = 1;
const max = 100;
//we create another variable name randoomnumber for calc and give us a number.
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
//give it attempts for 5 times
let attempts = 5;
//  now we want to select the button and input and empty p tag
const checkbtn = document.getElementById("checkbtn");
const guessinginput = document.getElementById("guess");
const message = document.getElementById("message");
//now after selecting we use addeventlistener for checkbtn and in the inside of addeventlistener we use the selecting id(guessinginput, message)
checkbtn.addEventListener("click", () => {
  const userguess = parseInt(guessinginput.value);
  //we create a const to the access the number user wrote in input
  //we have a lot logic in below.
  if (isNaN(userguess) || userguess < min || userguess > max) {
    message.textContent = "pleaz enter a valid number between 1 and 100";
  } else {
    attempts--;
    if (userguess === randomNumber) {
      message.textContent = `your winner🏆 the number is ${randomNumber}`;
      disabled();
    } else if (userguess < randomNumber) {
      message.textContent = `try a higher number! your attempts is ${attempts}`;
    } else {
      message.textContent = `try a lower number! your attempts is ${attempts}`;
    }
    if (attempts === 0) {
      message.textContent = `you lose this game the right number is ${randomNumber}`;
      disabled();
    }
  }
});
//this is for disabled input and button when user win or lose
console.log(randomNumber);
function disabled() {
  checkbtn.disabled = true;
  guessinginput.disabled = true;
}
